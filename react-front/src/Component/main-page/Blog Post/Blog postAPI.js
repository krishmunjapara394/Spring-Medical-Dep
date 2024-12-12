import sidebarImg1 from './IMG/blog-stick-1.svg'
import sidebarImg2 from './IMG/blog-stick-2.svg'
import sidebarImg3 from './IMG/blog-stick-3.svg'
import sidebarImg4 from './IMG/blog-stick-4.svg'
import sidebarImg5 from './IMG/blog-stick-5.svg'

import firstImg from './IMG/blog-2.svg'
import mainImg1 from './IMG/blog-3.svg'
import mainImg2 from './IMG/blog-4.svg'
import mainImg3 from './IMG/blog-5.svg'
import mainImg4 from './IMG/blog-6.svg'
import mainImg5 from './IMG/blog-7.svg'


import axios from 'axios'

export const sidebar = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/blog-post/sidebar`)
}

export const firstMain = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/blog-post/firstmain`)
}

export const main = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/blog-post/main`)
}


// export const sidebar = [
//     {
//         img: sidebarImg1,
//         title: 'Sleep Posture',
//         des: 'Alex Murray',
//         icon: <i class="bi bi-arrow-right rounded-5 text-black"></i>
//     },
//     {
//         img: sidebarImg2,
//         title: 'Plantar Fasciit...',
//         des: 'By spring',
//         icon: <i class="bi bi-arrow-right rounded-5 text-black"></i>
//     },
//     {
//         img: sidebarImg3,
//         title: 'Chiropractic...',
//         des: 'Dr. Alex Murray',
//         icon: <i class="bi bi-arrow-right rounded-5 text-black"></i>
//     },
//     {
//         img: sidebarImg4,
//         title: 'ICBC-MVA pat...',
//         des: 'By spring',
//         icon: <i class="bi bi-arrow-right rounded-5 text-black"></i>
//     },
//     {
//         img: sidebarImg5,
//         title: 'Rib Pain...',
//         des: 'By spring',
//         icon: <i class="bi bi-arrow-right rounded-5 text-black"></i>
//     }
// ]

// export const firstMain = [
//     {
//         image: firstImg,
//         details: {
//             nameIcon: <i class="bi bi-person-fill fs-4 pe-3"></i>, name: 'Alex Murray',
//             dateIcon: <i class="bi bi-calendar fs-4 pe-3"></i>, date: 'July 21,2015',
//             timeIcon: <i class="bi bi-clock-fill fs-4 pe-3"></i>, time: '05:34 pm | Monday',
//             commentIcon: <i class="bi bi-chat-square-text-fill fs-4 pe-3"></i>, comment: 'Comments'
//         },
//         title: 'Sleep Posture',
//         des: 'Many patients ask what is the right sleep posture for them? Unfortunately, there is never one correct way to sleep that can be applied to everyone equally. Generally, I recommend sleeping on your back with a pillow under the knees. However, a patient who snores or is a restless sleeper...',
//         read: 'Read More'
//     }
// ]

// export const main = [
//     {
//         image: mainImg1,
//         details: {
//             nameIcon: <i class="bi bi-person-fill fs-4 pe-3"></i>, name: 'Alex Murray',
//             dateIcon: <i class="bi bi-calendar fs-4 pe-3"></i>, date: 'September 15, 2014',
//             timeIcon: <i class="bi bi-clock-fill fs-4 pe-3"></i>, time: '01:38 pm | Tuesday',
//             commentIcon: <i class="bi bi-chat-square-text-fill fs-4 pe-3"></i>, comment: 'Comments'
//         },
//         title: 'Chiropractic more than cracking!',
//         des: 'If there is one thing that a new patient usually knows about chiropractic, it is those loud “cracking” sounds involved with adjustments. These audible releases of gas pockets are generally known as “cavitations” that are the result of joints releasing gas pockets and popping...',
//         read: 'Read More'
//     },
//     {
//         image: mainImg2,
//         details: {
//             nameIcon: <i class="bi bi-person-fill fs-4 pe-3"></i>, name: 'Alex Murray',
//             dateIcon: <i class="bi bi-calendar fs-4 pe-3"></i>, date: 'October 15, 2014',
//             timeIcon: <i class="bi bi-clock-fill fs-4 pe-3"></i>, time: '04:27 pm | Wednesday',
//             commentIcon: <i class="bi bi-chat-square-text-fill fs-4 pe-3"></i>, comment: 'Comments'
//         },
//         title: 'Plantar Fasciitis – Quick Help',
//         des: 'Plantar fasciitis(PF) is the burning, sharp or sore pain that someone may experience at the heel of their foot or the mid arch region.Common pain patterns include: experiencing pain in the morning on the first few steps or pain that increases during long walks, standing...',
//         read: 'Read More'
//     },
//     {
//         image: mainImg3,
//         details: {
//             nameIcon: <i class="bi bi-person-fill fs-4 pe-3"></i>, name: 'Alex Murray',
//             dateIcon: <i class="bi bi-calendar fs-4 pe-3"></i>, date: 'March 24. 2017',
//             timeIcon: <i class="bi bi-clock-fill fs-4 pe-3"></i>, time: '04:27 pm | Thursday',
//             commentIcon: <i class="bi bi-chat-square-text-fill fs-4 pe-3"></i>, comment: 'Comments'
//         },
//         title: 'ICBC – MVA patients',
//         des: 'Why Chiropractic care for car accident injuries? Today in society too much focus is spent on just treating pain symptoms. Car accidents can be devastating for many different reasons including injury, time off work...',
//         read: 'Read More'
//     },
//     {
//         image: mainImg4,
//         details: {
//             nameIcon: <i class="bi bi-person-fill fs-4 pe-3"></i>, name: 'Alex Murray',
//             dateIcon: <i class="bi bi-calendar fs-4 pe-3"></i>, date: 'March 24. 2017',
//             timeIcon: <i class="bi bi-clock-fill fs-4 pe-3"></i>, time: '04:27 pm | Friday',
//             commentIcon: <i class="bi bi-chat-square-text-fill fs-4 pe-3"></i>, comment: 'Comments'
//         },
//         title: 'Rib Pain (Part 2- Lower ribs) Quick Help',
//         des: 'The What? Rib pain, specifically the lower part can be felt in three areas; on the side, posterior (back) and anterior (chest). Lower rib pain is felt usually as a sharp pain in the upper low back, upper abdomen...',
//         read: 'Read More'
//     },
//     {
//         image: mainImg5,
//         details: {
//             nameIcon: <i class="bi bi-person-fill fs-4 pe-3"></i>, name: 'Alex Murray',
//             dateIcon: <i class="bi bi-calendar fs-4 pe-3"></i>, date: 'March 24. 2017',
//             timeIcon: <i class="bi bi-clock-fill fs-4 pe-3"></i>, time: ' 04:27 pm | setarday',
//             commentIcon: <i class="bi bi-chat-square-text-fill fs-4 pe-3"></i>, comment: 'Comments'
//         },
//         title: 'Rib Pain (Part 1- Upper) Quick Help',
//         des: 'The What?Rib pain, specifically the upper part can be felt in two main areas, posterior (back) and anterior (chest). Upper rib pain is usually felt as either a sharp or deep dull pain on...',
//         read: 'Read More'
//     }
// ]