
import familyImg1 from '../our services/Family Physicians IMG/dr-nima-sakian.jpg'
import familyImg2 from '../our services/Family Physicians IMG/Jess-Portrait-BW.jpg'
import familyImg3 from '../our services/Family Physicians IMG/DrAdam.jpg'
import familyImg4 from '../our services/Family Physicians IMG/image-1.jpg'
import familyImg5 from '../our services/Family Physicians IMG/dr-nima-sakian.jpg'
import familyImg6 from '../our services/Family Physicians IMG/Jess-Portrait-BW.jpg'
import familyImg7 from './Our Team Img/IMG_0924-e1570568677898.jpg'
import familyImg8 from './Our Team Img/download.jpg'

import axios from 'axios'

export const ourTeamapi = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/our-team`)
}


// export const ourTeamapi = [
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
//         p3 : '',
//         lm : 'Learn More '
//     },
//     {
//         image : familyImg7,
//         heading:'Dr. Jessica Chueh',
//         p1 : 'Family Doctor',
//         p2 : 'Dr. Jessica Chueh completed her medical studies and specialist training in Australia, and has returned to British Columbia where she looks forward to working as a family practitioner.She spends her free time going exploring with her camera, and enjoying nature.',
//         lm : 'Learn More ',
//     },
//     {
//         image : familyImg8,
//         heading:'Noorjahan Jaganath',
//         p1 : 'Nurse Practitioner',
//         p2 : 'Noorjahan Jaganath is a Registered Nurse Practitioner whose focus is to provide comprehensive care to populations of all age groups. She has 30-years of nursing experience, of which she has been managing patients of Northern Saskatchewan independently since 2013. She became an NP in 2017 and now registered to practice in BC. She provides care with empathy and kindness.',
//         p3 : 'She holds an MSc in Child Health Nursing from MGR Medical University(2000) and an MSc in Health Sciences from the University of London (2005) and Masters in NP from Athabasca University. She has been a nurse in critical care, pediatrics, and gerontology. She also worked as a faculty at the University of the Fraser Valley and a Clinical Associate of UBC.',
//         lm : 'Learn More '
//     }
// ]