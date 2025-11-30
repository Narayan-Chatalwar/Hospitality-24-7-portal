
import { createSignal } from "solid-js"
import { HospitalsDetails } from "~/constants/NearbyHospitalsDumb"
import styles from "./NearbyHospitals.module.scss"

export interface Hospital {
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
}

export interface HospitalsDetailsProps {
    search_location: string;
    total_results: number;
    hospitals: Hospital[];
}

const initialData: HospitalsDetailsProps = HospitalsDetails as HospitalsDetailsProps;

const NearbyHospitals = () => {
    const [hospitalsData, setHospitalsData] = createSignal<HospitalsDetailsProps>(initialData);

    const hospitalsList = () => hospitalsData()?.hospitals || [];

    return (
        <div class={styles.hospitalsWrapper}>
            <div class={styles.hospitalsListContainer}>
                {hospitalsList()?.map((hospital: Hospital, index: number) => (
                    <div class={styles.hospitalCard}>
                        <div class={styles.hospitalHeader}>
                            <h3>{hospital.name}</h3>
                            <span class={styles.rating}>⭐ {hospital.rating} ({hospital.reviews} reviews)</span>
                        </div>

                        <p class={styles.specialties}>
                            Specialties: <b>{hospital.specialties.join(', ')}</b>
                        </p>

                        <p class={styles.address}>
                            {hospital.address}, {hospital.pincode}
                        </p>

                        <div class={styles.details}>
                            <span class={styles.distance}>
                                <b>{hospital.distance_km} km</b> away
                            </span>
                            <span class={styles.contact}>
                                Contact: {hospital.contact}
                            </span>
                            <span class={styles.hours}>
                                {hospital.is_24_hours ? '24 Hours Open' : 'Check Operating Hours'}
                            </span>
                        </div>

                        <a
                            href={hospital.booking_link}
                            // target="_blank"
                            class={styles.bookingButton}
                        >
                            Book Appointment
                        </a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NearbyHospitals
