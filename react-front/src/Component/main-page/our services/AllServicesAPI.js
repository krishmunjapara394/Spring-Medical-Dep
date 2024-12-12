// import sec2Img from './Electrocardiogram IMG/electrocardiographic-ecg-monitoring-device.jpg'

// import Hsec1Img from './Holter Monitering IMG/jmikml.png'
// import Hsec2Img from './Holter Monitering IMG/image-1.png'

// import traSec1Img1 from './Traditional Chinese Herbal Therapy IMG/i.jpg'
// import traSec1Img2 from './Traditional Chinese Herbal Therapy IMG/image-2.png'

// import ourImg1 from './Our Service img/jmikml.png'
// import ourImg2 from './Our Service img/electrocardiographic.png'
// import ourImg3 from './Our Service img/jhhj.png'
// import ourImg4 from './Our Service img/masterpuls_ultra_9-1.png'

// import sec6Img1 from './Our Service img/Path 4401.png'
// import sec6Img2 from './Our Service img/Path 4340.png'
// import sec6Img3 from './Our Service img/noun_orthopedics_384.png'
// import sec6Img4 from './Our Service img/noun_Spine_2513496.png'
// import sec6Img5 from './Our Service img/Path 4346.png'
// import sec6Img6 from './Our Service img/Image 1.png'
// import sec6Img7 from './Our Service img/Path 4347.png'
// import sec6Img8 from './Our Service img/Path 4348.png'
// import sec6Img9 from './Our Service img/Path 4364.png'
// import sec6Img10 from './Our Service img/noun_counselor_38574.png'
// import sec6Img11 from './Our Service img/Path 4363.png'
// import sec6Img12 from './Our Service img/Path 4371.png'
// import sec6Img13 from './Our Service img/Path 4389.png'
// import sec6Img14 from './Our Service img/noun_green tea_11746.png'
// import sec6Img15 from './Our Service img/Path 4394.png'
// import sec6Img16 from './Our Service img/Image 2.png'
// import sec6Img17 from './Our Service img/Path 4372.png'
// import sec6Img18 from './Our Service img/noun_footwear_106637.png'
// import sec6Img19 from './Our Service img/Path 4387.png'

// import shockImg1 from './Shockwave IMG/Screenshot 2024-06-22 095224.png'

// import familyImg1 from './Family Physicians IMG/dr-nima-sakian.jpg'
// import familyImg2 from './Family Physicians IMG/Jess-Portrait-BW.jpg'
// import familyImg3 from './Family Physicians IMG/DrAdam.jpg'
// import familyImg4 from './Family Physicians IMG/dr-nima-sakian.jpg'
// import familyImg5 from './Family Physicians IMG/image-1.jpg'
// import familyImg6 from './Family Physicians IMG/Jess-Portrait-BW.jpg'

// import footImg1 from './Foot Orthotics img/Why Custom Orthotics.png'
// import footImg2 from './Foot Orthotics img/Shockwave.jpg'
// import footImg3 from './Foot Orthotics img/0041283_caldera-hot-and-cold-therapy-gel-pack.png'

import axios from 'axios'

// Electrocardiogram

export const eleSec2 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/electrocardiogram/sec2`)
}


// export const eleSec2 = [
//     {
//         image: sec2Img,
//         title: 'Holter Monitoring',
//         details: 'A Holter monitor is a small, wearable device that keeps track of your heart rhythm. Your doctor may want you to wear a Holter monitor for 24 hours. During that time, the device records all of your heartbeats.',
//         description: 'A Holter monitor test is usually performed after a traditional test to check your heart rhythm (electrocardiogram) if the electrocardiogram (ECG) doesnt give your doctor enough information about your hearts condition.'
//     }
// ]


// Our Services-Holter Monitering

export const holterSec1 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/holter/sec1`)
}

// export const holterSec1 = [
//     {
//         image: Hsec1Img,
//         title: 'Holter Monitoring',
//         details: 'A Holter monitor is a small, wearable device that keeps track of your heart rhythm. Your doctor may want you to wear a Holter monitor for 24 hours. During that time, the device records all of your heartbeats.',
//         description: 'A Holter monitor test is usually performed after a traditional test to check your heart rhythm (electrocardiogram) if the electrocardiogram (ECG) doesnt give your doctor enough information about your hearts condition.'
//     },
//     {
//         image: Hsec2Img,
//         title: 'Your doctor uses information',
//         details: 'Your doctor uses information captured on the Holter monitor to figure out if you have a heart rhythm problem. If standard Holter monitoring doesnt capture your irregular heartbeat, your doctor may suggest a wireless Holter monitor, which can work for weeks.',
//         description: 'While wearing a Holter monitor may be a little inconvenient, its an important test that may help your doctor diagnose your condition.'
//     }
// ]


// Traditional Chinese Herbal Therapy

export const traditionalSec1 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/herbal-therapy/sec1`)
}

// export const traditionalSec1 = [
//     {
//         image: traSec1Img1,
//         title: 'Traditional Chinese Herbal Therapy',
//         details: 'Traditional Chinese herbal medicine can treat many common ailments, including but not limited to common colds, flu, allergies, coughs, digestive disorders, pains, insomnia, emotional distress, etc. The practitioner combines herbs based on the diagnosis, using a traditional herbal formula as a foundation and adding other herbs specific to the individual’s complaint and constitution.',
//         description: 'Is it easy to prepare and consume?<br> Yes! The herbal medicine comes in powder form. Patient just needs to dissolve the powdered herbs in hot water and drinks it like a tea. Herbs are CUSTOMIZED to fit your NEEDS!'
//     },
//     {
//         image: traSec1Img2,
//         title: 'What is TCM?',
//         description: 'Traditional Chinese Medicine (TCM) is literally “Chinese medicine” with a broad range of medicine practices sharing common theoretical concepts which include various forms of herbal medicine, acupuncture, massage (Tui na), exercise (qigong), and dietary therapy.'
//     }
// ]


// Our Services

export const sections = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/ourservices/sections`)
}

// export const sections = [
//     {
//         image: ourImg1,
//         heading: 'Holter Monitoring',
//         description: 'A Holter monitor is a small, wearable device that keeps track of your heart rhythm. Your doctor may want you to wear a Holter monitor for 24 hours. During that time, the device records all of your heartbeats.',
//         btn: 'View More '
//     },
//     {
//         image: ourImg2,
//         heading: 'Electrocardiogram',
//         description: 'An electrocardiogram (ECG) is a medical test that detects cardiac (heart) abnormalities by measuring the electrical activity generated by the heart as it contracts. The machine that records the patient’s ECG is called an electrocardiograph.',
//         btn: 'View More '
//     },
//     {
//         image: ourImg3,
//         heading: 'Traditional Chinese Herbal Therapy',
//         description: 'A Holter monitor is a small, wearable device that keeps track of your heart rhythm. Your doctor may want you to wear a Holter monitor for 24 hours. During that time, the device records all of your heartbeats.',
//         btn: 'View More '
//     },
//     {
//         image: ourImg4,
//         heading: 'Shockwave',
//         description: 'There are no side effects with this non surgical treatment and it is available at a reasonable cost. Shockwave treatments are non invasive and promote accelerate recovery of injured soft tissue, bone, heel and joint pain.',
//         btn: 'View More '
//     }
// ]

export const sec6 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/ourservices/sec6`)
}

// export const sec6 = [
//     {
//         image: sec6Img1,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img2,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img3,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img4,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img5,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img6,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img7,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img8,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img9,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img10,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img11,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img12,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img13,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img14,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img15,
//         title: 'Family Physician '
//     },
//     {
//         image: sec6Img16,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img17,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img18,
//         title: 'Family Physician'
//     },
//     {
//         image: sec6Img19,
//         title: 'Family Physician'
//     }
// ]


// Shockwave

export const section = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/shockwave/section`)
}

// export const section = [
//     {
//         image: shockImg1,
//         heading: 'Accelerate Healing With Shockwave Therapy',
//         p2: 'There are no side effects with this non surgical treatment and it is available at a reasonable cost. Shockwave treatments are non invasive and promote accelerate recovery of injured soft tissue, bone, heel and joint pain.',
//         p3: 'A shockwave is an intense, but very short energy wave traveling faster than the speed of sound. The basic technology involved with extracorporeal shockwave technology has been used for decades on millions of people.',
//         p4: 'Therapy sessions are short, usually 20 – 30 minutes in length, and provide successful relief of chronic pain and restore mobility painlessly. Permanent relief typically begins about 72 hours following treatment.',
//     },
// ]

export const tbl = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/shockwave/table`)
}

// export const tbl = [
//     {
//         li1: 'Achilles Tendinopathy',
//         li2: 'Scar Tissue Treatment',
//         li3: 'Tennis Elbow',
//         li4: 'Jumpers Knee',
//     },
//     {
//         li1: 'Achilles Tendinopathy',
//         li2: 'Scar Tissue Treatment',
//         li3: 'Tennis Elbow',
//         li4: 'Jumpers Knee',
//     },
//     {
//         li1: 'Achilles Tendinopathy',
//         li2: 'Scar Tissue Treatment',
//         li3: 'Tennis Elbow',
//         li4: 'Jumpers Knee',
//     }
// ]


// Family Physician

export const FamilyPhysician = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/familyphysician`)
}

// export const FamilyPhysician = [
//     {
//         image : familyImg1,
//         heading:'Dr. Nima Sakian',
//         p1 : 'Family Physician',
//         p2 : 'After earning a B.Sc. in Physics from the University of British Columbia, Dr. Sakian completed his medical school in the Netherlands Antilles. He then moved to New York for a three year residency program at North Shore LIJ hospital to further diversify his education and training as a Physician.',
//         p3 : 'Dr. Sakian has previously worked at the Brentwood Medical Clinic and has recently joined the experts at Spring. He is excited to continue to serve all patients in particular in the Burnaby area and hopes to establish many new long-term patient-doctor relationships. Dr. Sakian enjoys sports, outdoor activities, and loves music. Currently, in addition to working at Spring Integrative Medical Centre, Dr. Sakian works at cedar cottage medical clinic.',
//         p4 : 'Dr.Sakian also has extensive experience working with Geriatrics patients and offers “Cosmetics Services"',
//         lm : 'Learn More '
//     },
//     {
//         image : familyImg2,
//         heading:'Dr. Farid Zahedieh',
//         p1 : 'Family Doctor',
//         p2 : 'Dr. Farid Zahedieh is the newest Family Doctor who joined Spring medical centre. He stopped accepting new patients but does walk-ins on weekends',
//         lm : 'Learn More ',

//     },
//     {
//         image : familyImg3,
//         heading:'Dr. Nima Sakian',
//         p1 : 'Family Physician',
//         p2 : 'After earning a B.Sc. in Physics from the University of British Columbia, Dr. Sakian completed his medical school in the Netherlands Antilles. He then moved to New York for a three year residency program at North Shore LIJ hospital to further diversify his education and training as a Physician.',
//         p3 : 'Dr. Sakian has previously worked at the Brentwood Medical Clinic and has recently joined the experts at Spring. He is excited to continue to serve all patients in particular in the Burnaby area and hopes to establish many new long-term patient-doctor relationships. Dr. Sakian enjoys sports, outdoor activities, and loves music. Currently, in addition to working at Spring Integrative Medical Centre, Dr. Sakian works at cedar cottage medical clinic.',
//         p4 : 'Dr.Sakian also has extensive experience working with Geriatrics patients and offers “Cosmetics Services"',
//         lm : 'Learn More '
//     },
//     {
//         image : familyImg4,
//         heading:'Dr. Jessica Chueh',
//         p1 : 'Family Doctor',
//         p2 : 'Dr. Jessica Chueh completed her medical studies and specialist training in Australia, and has returned to British Columbia where she looks forward to working as a family practitioner.She spends her free time going exploring with her camera, and enjoying nature.',
//         lm : 'Learn More ',
//     },
//     {
//         image : familyImg5,
//         heading:'Dr. Nima Sakian',
//         p1 : 'Family Physician',
//         p2 : 'After earning a B.Sc. in Physics from the University of British Columbia, Dr. Sakian completed his medical school in the Netherlands Antilles. He then moved to New York for a three year residency program at North Shore LIJ hospital to further diversify his education and training as a Physician.',
//         p3 : 'Dr. Sakian has previously worked at the Brentwood Medical Clinic and has recently joined the experts at Spring. He is excited to continue to serve all patients in particular in the Burnaby area and hopes to establish many new long-term patient-doctor relationships. Dr. Sakian enjoys sports, outdoor activities, and loves music. Currently, in addition to working at Spring Integrative Medical Centre, Dr. Sakian works at cedar cottage medical clinic.',
//         p4 : 'Dr.Sakian also has extensive experience working with Geriatrics patients and offers “Cosmetics Services"',
//         lm : 'Learn More '
//     },
//     {
//         image : familyImg6,
//         heading:'Dr. Jessica Chueh',
//         p1 : 'Family Doctor',
//         p2 : 'Dr. Jessica Chueh completed her medical studies and specialist training in Australia, and has returned to British Columbia where she looks forward to working as a family practitioner.She spends her free time going exploring with her camera, and enjoying nature.',
//         lm : 'Learn More ',
//     }    
// ]


// Foot Orthotics

export const FootOrthotics = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/footorthotics`)
}

// export const FootOrthotics = [
//     {
//         image: footImg1,
//         heading: 'Why Use Foot-Orthotics?',
//         p1: 'Custom made foot Orthotic defines as a medical device is made to support, align, prevent or enhance deformities of the foot.',
//         p2: 'A bio mechanical assessment should be performed to determine if foot orthotics would benefit a patient. Custom made Orthotics is fabricated at our partner labs with different materials to provide support for different foot problems.',
//         p3: 'Custom foot orthotics is the preferred treatment for foot and knee pain, Plantar Fasciitis, Achilles tendonitis, Metatarsalgia, and other foot diseases. It can also reduce muscular fatigue in order to promote more efficient feet performance. People who are active in sports or who stand or walk for long hours may find custom orthotics helpful to increase performance abilities.'
//     },
//     {
//         image: footImg2,
//         heading: 'Why Custom Orthotics?',
//         p1: 'Custom made foot Orthotic defines as a medical device is made to support, align, prevent or enhance deformities of the foot.',
//         p2: 'A bio mechanical assessment should be performed to determine if foot orthotics would benefit a patient. Custom made Orthotics is fabricated at our partner labs with different materials to provide support for different foot problems.',
//         p3: 'Custom foot orthotics is the preferred treatment for foot and knee pain, Plantar Fasciitis, Achilles tendonitis, Metatarsalgia, and other foot diseases. It can also reduce muscular fatigue in order to promote more efficient feet performance. People who are active in sports or who stand or walk for long hours may find custom orthotics helpful to increase performance abilities.'
//     },
//     {
//         image: footImg3,
//         heading: 'Why Use Foot-Orthotics?',
//         p1: 'Custom made foot Orthotic defines as a medical device is made to support, align, prevent or enhance deformities of the foot.',
//         p2: 'A bio mechanical assessment should be performed to determine if foot orthotics would benefit a patient. Custom made Orthotics is fabricated at our partner labs with different materials to provide support for different foot problems.',
//         p3: 'Custom foot orthotics is the preferred treatment for foot and knee pain, Plantar Fasciitis, Achilles tendonitis, Metatarsalgia, and other foot diseases. It can also reduce muscular fatigue in order to promote more efficient feet performance. People who are active in sports or who stand or walk for long hours may find custom orthotics helpful to increase performance abilities.'
//     },
//     {
//         image: footImg2,
//         heading: 'Why Custom Orthotics?',
//         p1: 'Custom made foot Orthotic defines as a medical device is made to support, align, prevent or enhance deformities of the foot.',
//         p2: 'A bio mechanical assessment should be performed to determine if foot orthotics would benefit a patient. Custom made Orthotics is fabricated at our partner labs with different materials to provide support for different foot problems.',
//         p3: 'Custom foot orthotics is the preferred treatment for foot and knee pain, Plantar Fasciitis, Achilles tendonitis, Metatarsalgia, and other foot diseases. It can also reduce muscular fatigue in order to promote more efficient feet performance. People who are active in sports or who stand or walk for long hours may find custom orthotics helpful to increase performance abilities.'
//     }
// ]
