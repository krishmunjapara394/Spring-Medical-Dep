const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const sidebarUL = [
  {
    img: './images/profile-1.png',
    name: 'Super Admin'
  }
]

const sidebarUL1 = [
  {
    icon: '<i class="bi bi-speedometer fs-5 "></i>',
    name: 'Dashboard'
  },
  {
    icon: '<i class="fa-solid fa-user-doctor fs-4"></i>',
    name: 'Doctor'
  },
  {
    icon: '<i class="fa-solid fa-bed-pulse fs-5"></i>',
    name: 'patient'
  },
  {
    icon: ' <i class="bi bi-calendar3 fs-5"></i>',
    name: 'Doctor Schedule'
  },
  {
    icon: '<i class="bi bi-calendar-check fs-5"></i>',
    name: 'Patient Appointment'
  },
  {
    icon: '<i class="bi bi-files fs-5"></i>',
    name: 'Patient Case Studies'
  },
  {
    icon: '<i class="bi bi-prescription fs-5"></i>',
    name: 'Prescription'
  }
]


const navbar = [
  {
    img: '<i class="bi bi-hospital text-light fs-5 px-1" style="background-color: #005C8D;"></i>',
    title: 'HelthEase',
    menu: {
      first: 'Action',
      secound: 'Another action',
      third: 'Something else here'
    }
  },
  {
    img: '<img src="./images/profile-1.png" width="30px" height="30px" alt="">',
    title: 'Mr Patient',
    menu: {
      first: 'Action',
      secound: 'Another action',
      third: 'Something else here'
    }
  },
  {
    img: ' <img src="./images/flag india.png" width="40px" alt="">',
    title: 'Indian',
    menu: {
      first: 'English',
      secound: 'Spanish',
      third: 'UK'
    }
  }
]

const doctors = [
  {
    first: {
      id: 1,
      name: "Mr Doctor",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0120",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    },
    second: {
      id: 2,
      name: "Mr Doctor",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0121",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    }
  },
  {
    first: {
      id: 3,
      name: "Mr Doctor Y",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0122",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    },
    second: {
      id: 4,
      name: "Mr Doctor X",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0123",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    }
  },
  {
    first: {
      id: 5,
      name: "Mr Doctor Z",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0124",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    },
    second: {
      id: 6,
      name: "Mr Doctor W",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0125",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    }
  },
  {
    first: {
      id: 7,
      name: "Mr Doctor V",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0126",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    },
    second: {
      id: 8,
      name: "Mr Doctor U",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0127",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    }
  },
  {
    first: {
      id: 9,
      name: "Mr Doctor T",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0128",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    },
    second: {
      id: 10,
      name: "Mr Doctor S",
      email: "doctor@ambitiousit.com",
      phone: "(406) 555-0129",
      department: "Outpatient department (OPD)",
      status: "Active",
      action: "<i class='bi bi-eye'></i>"
    }
  }
];



function displayDashboard() {


  let str1 = ""
  sidebarUL?.forEach((a) => {
    str1 += `
      <a href="#" class="sidebar-link border-top border-bottom">
        <img style="border-radius: 50%; margin-left: -10px;" src="${a.img}"
            width="40px" height="40px" alt="">
        <span class="ps-4 fw-bold fs-6">${a.name}</span>
      </a>
    `
  })
  document.getElementById('sidebar-item').innerHTML = str1


  let str2 = ""
  sidebarUL1?.forEach((a) => {
    str2 += `
    <li class="sidebar-item">
      <a href="#" class="sidebar-link mt-1">
        ${a?.icon}
        <span class="fw-bold fs-6">${a?.name}</span>
      </a>
    </li>
    `
  })
  document.getElementById('sidebar-li').innerHTML = str2


  let str3 = ""
  navbar?.forEach((a) => {
    str3 += `
    <li class="nav-item dropdown ms-lg-5">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        ${a.img}
        <span class="ps-3">${a.title}</span> 
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">${a.menu.first}</a></li>
        <li><a class="dropdown-item" href="#">${a.menu.secound}</a></li>
        <li><a class="dropdown-item" href="#">${a.menu.third}</a></li>
    </ul>
</li>
    `
  })
  document.getElementById('navbar-nav').innerHTML = str3



  let str4 = ""
  doctors?.forEach((a) => {
    str4 += `
    <tr class="bg-light">
      <td class="ps-4 py-4">${a?.first?.id}</td>
      <td class="ps-4 py-4">${a?.first?.name}</td>
      <td class="ps-4 py-4">${a?.first?.email}</td>
      <td class="ps-4 py-4">${a?.first?.phone}</td>
      <td class="ps-4 py-4">${a?.first?.department}</td>
      <td class="ps-4 py-4 text-danger">${a?.first?.status}</td>
      <td class="text-end pe-4 ps-4 py-4 fs-5">${a?.first?.action}</td>
    </tr>
    <tr class="thead">
        <td class="ps-4 py-4">${a?.second?.id}</td>
        <td class="ps-4 py-4">${a?.second?.name}</td>
        <td class="ps-4 py-4">${a?.second?.email}</td>
        <td class="ps-4 py-4">${a?.second?.phone}</td>
        <td class="ps-4 py-4">${a?.second?.department}</td>
        <td class="ps-4 py-4 text-danger">${a?.second?.status}</td>
        <td class="text-end pe-4 py-4 ps-4 fs-5">${a?.second?.action}</td>
    </tr>
    `
  })
  document.getElementById('doctor-list').innerHTML = str4

}
displayDashboard()