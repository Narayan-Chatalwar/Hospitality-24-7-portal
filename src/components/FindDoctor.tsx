import { createSignal, createEffect, For, Show, JSX } from "solid-js";
import { useSearchParams } from "@solidjs/router";
import { HospitalsDetails } from "~/constants/NearbyHospitalsDumb";
import styles from "./FindDoctor.module.scss";

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    experience: string;
    availability: string[];
}

interface Hospital {
    id: string;
    name: string;
    specialties: string[];
    rating: number;
    reviews: number;
    address: string;
    pincode: string;
    distance_km: number;
    contact: string;
    is_24_hours: boolean;
    booking_link: string;
    doctors?: Doctor[];
}

interface Booking {
    id: number;
    hospital: string;
    doctor: string;
    specialty: string;
    slot: string;
    createdAt: string;
}

const FindDoctor = () => {
    const [params] = useSearchParams();

    const [hospital, setHospital] = createSignal<Hospital | null>(null);
    const [selectedSlot, setSelectedSlot] = createSignal<string>("");
    const [selectedDoctor, setSelectedDoctor] = createSignal<Doctor | null>(null);
    const [showPopup, setShowPopup] = createSignal(false);
    const [errorMessage, setErrorMessage] = createSignal("");
    const [showErrorPopup, setShowErrorPopup] = createSignal(false);


    createEffect(() => {
        const paramName = Array.isArray(params.hospital)
            ? params.hospital[0]?.toLowerCase()
            : params.hospital?.toLowerCase();

        if (!paramName) return;

        const found = HospitalsDetails.hospitals.find((h: Hospital) =>
            h.booking_link.toLowerCase().includes(paramName)
        );

        setHospital(found || null);
    });


    const saveBooking = (doctor: Doctor, slot: string): boolean => {
        const currentHospital = hospital();
        if (!currentHospital) return false;

        const stored: Booking[] = JSON.parse(localStorage.getItem("userBookings") || "[]");

        const exists = stored.some(
            (b) =>
                b.hospital === currentHospital.name &&
                b.doctor === doctor.name &&
                b.slot === slot
        );

        if (exists) {
            setErrorMessage("You already have an appointment at this time slot with this doctor.");
            setShowErrorPopup(true);

            setTimeout(() => setShowErrorPopup(false), 2500);
            return false;
        }

        const booking: Booking = {
            id: Date.now(),
            hospital: currentHospital.name,
            doctor: doctor.name,
            specialty: doctor.specialty,
            slot,
            createdAt: new Date().toISOString(),
        };

        stored.push(booking);
        localStorage.setItem("userBookings", JSON.stringify(stored));

        setErrorMessage("");
        return true;
    };

    const confirmBooking = () => {
        if (!selectedDoctor() || !selectedSlot()) return;

        const ok = saveBooking(selectedDoctor()!, selectedSlot()!);

        if (!ok) {
            return;
        }

        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2500);
    };


    return (
        <div class={styles.wrapper}>
            {!hospital() && <h2>No hospital selected.</h2>}

            {hospital() && (
                <>
                    <h1 class={styles.header}>Doctors at {hospital()!.name}</h1>

                    {hospital()!.doctors?.map((doc: Doctor) => (
                        <div class={styles.doctorCard}>
                            <h2>{doc.name}</h2>
                            <p><strong>{doc.specialty}</strong></p>
                            <p>{doc.experience} experience</p>

                            <label>Choose a time slot:</label>
                            <select
                                class={styles.slotSelect}
                                onChange={(e) => {
                                    const target = e.target as HTMLSelectElement;
                                    setSelectedSlot(target.value);
                                    setSelectedDoctor(doc);
                                }}
                            >
                                <option value="">-- Select Slot --</option>

                                {doc.availability.map((slot: string) => (
                                    <option value={slot}>{slot}</option>
                                ))}
                            </select>

                            <button
                                class={styles.bookBtn}
                                onClick={confirmBooking}
                                disabled={!selectedSlot()}
                            >
                                Book Appointment
                            </button>
                        </div>
                    ))}

                    {showPopup() && (
                        <div class={styles.popup}>
                            <p>🎉 Appointment booked successfully!</p>
                            <p>
                                Doctor: {selectedDoctor()?.name}<br />
                                Time: {selectedSlot()}
                            </p>
                        </div>
                    )}
                </>
            )}
            {showErrorPopup() && (
                <div class={styles.errorPopup}>
                    <p>⚠️ {errorMessage()}</p>
                </div>
            )}
        </div>

    );
};

export default FindDoctor;


