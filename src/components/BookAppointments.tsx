import { createSignal, createMemo, Show, For } from "solid-js";
import { useNavigate, useSearchParams } from "@solidjs/router";
import { HospitalsDetails } from "~/constants/NearbyHospitalsDumb";
import styles from "./BookAppointments.module.scss";

export interface Hospital {
    id: string;
    name: string;
    specialties: string[];
    rating: number;
    booking_link: string;
}

const allHospitals: Hospital[] = HospitalsDetails.hospitals;


const BookAppointment = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedHospitalId, setSelectedHospitalId] = createSignal("");

    const selectedHospital = createMemo(() => {
        const paramName: any = searchParams.hospital;

        if (paramName) {
            const hospital = allHospitals.find(h =>
                h.booking_link.toLowerCase().includes(paramName?.toLowerCase())
            );
            return hospital;
        }

        if (selectedHospitalId()) {
            return allHospitals.find(h => h.id === selectedHospitalId());
        }

        return null;
    });

    // const handleHospitalChange = (event:any) => {
    //     setSelectedHospitalId(event.target.value);
    // };

    const handleHospitalChange = (event: any) => {
        const selectedId = event.target.value;
        // 1. Update the local state for dropdown visibility
        setSelectedHospitalId(selectedId);

        // 2. Find the hospital object to get its unique link
        const hospital = allHospitals.find(h => h.id === selectedId);

        if (hospital) {
            // 3. Use setSearchParams to update the URL query parameter 'hospital'
            // This immediately changes the URL to include ?hospital=booking-link
            setSearchParams({ hospital: hospital.booking_link }, { replace: false });
        } else {
            // Optional: Clear the search parameter if the user selects the disabled 'Choose a Hospital' option
            setSearchParams({ hospital: undefined }, { replace: false });
        }
    };

    return (
        <div class={styles.bookingPageWrapper}>
            <Show
                when={selectedHospital()}
                fallback={<HospitalSelectionDropdown allHospitals={allHospitals} onChange={handleHospitalChange} selectedId={selectedHospitalId()} />}
            >
                {(hospital) => (
                    <BookingFeatures hospital={hospital} />
                )}
            </Show>
        </div>
    );
};

export default BookAppointment;


const HospitalSelectionDropdown = (props: any) => {
    return (
        <div class={styles.selectionContainer}>
            <h2>Select a Hospital to Book an Appointment</h2>
            <select
                value={props.selectedId}
                onChange={props.onChange}
                class={styles.hospitalSelect}
            >
                <option value="" disabled>-- Choose a Hospital --</option>
                <For each={props.allHospitals}>
                    {(h) => (
                        <option value={h.id}>{h.name}</option>
                    )}
                </For>
            </select>
            <p>Please choose a hospital from the list to see the booking options.</p>
        </div>
    );
};

const BookingFeatures = (props: any) => {
   const navigate = useNavigate();
    const [searchParams] = useSearchParams(); 

    const handleNavigateToFindDoctor = () => {
        const entries = Object.entries(searchParams);

        const filteredEntries = entries.filter(([, value]) => typeof value === 'string');

        const plainObjectParams = Object.fromEntries(filteredEntries) as Record<string, string>;

        const queryString = new URLSearchParams(plainObjectParams).toString();
        
        navigate(`/findDoctor?${queryString}`);
    };

    
    return (
        <div class={styles.featuresContainer}>
            <h1 class={styles.hospitalNameHeader}>
                Appointment Booking for **{props.hospital().name}**
            </h1>
            <p class={styles.hospitalAddress}>
                Location: {props.hospital().address}, {props.hospital().pincode}
            </p>

            <div class={styles.featureCards}>
                <div class={styles.featureCard}>
                    <h3>🗓️</h3>
                    <h3>Book New Appointment</h3>
                    <p>Schedule a visit with your preferred doctor or specialist.</p>
                    <button class={styles.bookButton} onClick={handleNavigateToFindDoctor}>Find Doctors</button>
                </div>

                <div class={styles.featureCard}>
                    <h3>🕒 </h3>
                    <h3>Track Appointments</h3>
                    <p>View, reschedule, or cancel your upcoming appointments.</p>
                    <button class={styles.trackButton}>Go to My Bookings</button>
                </div>

                <div class={styles.featureCard}>
                    <h3>📄 </h3>
                    <h3>View Health Records</h3>
                    <p>Access your digital prescriptions and past visit summaries.</p>
                    <button class={styles.recordsButton}>My Health Records</button>
                </div>
            </div>
        </div>
    );
};