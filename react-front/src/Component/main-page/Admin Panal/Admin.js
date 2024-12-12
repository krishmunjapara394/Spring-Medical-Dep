const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


const Dashboard1 = [
  {
    blurPart: {
      title: 'Department',
      count: '8',
      Image: './images/setting.png'
    },
    greenPart: {
      title: 'Patient',
      count: '4',
      Image: './images/patient.png'
    },
    orangePart: {
      title: 'Doctor',
      count: '14',
      Image: './images/doctor.png'
    }
  },
  {
    blurPart: {
      title: 'P-Appointment',
      count: '8',
      Image: './images/appointment.png'
    },
    greenPart: {
      title: 'Invoice',
      count: '0',
      Image: './images/invoice.png'
    },
    orangePart: {
      title: 'P-Case Studies',
      count: '0',
      Image: './images/paper.png'
    },
  },
  {
    blurPart: {
      title: 'Prescription',
      count: '0',
      Image: './images/pills.png'
    },
    greenPart: {
      title: 'Payment',
      count: '0',
      Image: './images/payment.png'
    },
    orangePart: {
      title: 'P-Case Studies',
      count: '3',
      Image: './images/paper.png'
    }
  }
]

const Dashboard2 = [
  {
    firstPart: {
      title: 'Monthly Registered Users',
      Image: './images/graph.png'
    },
    secondPart: {
      title: 'Monthly <br> Earning',
      Weekly: 'Weekly',
      Monthly: 'Monthly',
      week: {
        curWeek: 'This Week',
        weekEarning: '$29.5',
        prevWeek: {
          prevWeekEarning: '-31.08%',
          prevWeek: 'from Previous week earning',
        },
        earnImg: './images/earning.png',
      },
      Analytics1: {
        img: './images/download.png',
        description: '1st 15 days<br>Analytics'
      },
      Analytics2: {
        img: './images/download (2).png',
        description: 'last 15 days<br>Analytics'
      }
    },
    copyRight: 'Copyright © 2024 HealthEase Medical. All rights reserved.'
  }
]

const sidebarUL = [
  {
    img: './images/profile-1.png',
    name: 'Super Admin'
  }
]

const sidebarUL1 = [
  {
    icon: '<i class="bi bi-speedometer fs-5 "></i>',
    name: 'Dashboard',
    link: './Doctor-page/doctor.html'
  },
  {
    icon: '<i class="fa-solid fa-user-doctor fs-4"></i>',
    name: 'Doctor',
    link: './Doctor-page/doctor.html'
  },
  {
    icon: '<i class="fa-solid fa-bed-pulse fs-5"></i>',
    name: 'patient',
    link: './Doctor-page/doctor.html'
  },
  {
    icon: ' <i class="bi bi-calendar3 fs-5"></i>',
    name: 'Doctor Schedule',
    link: './Doctor-page/doctor.html'
  },
  {
    icon: '<i class="bi bi-calendar-check fs-5"></i>',
    name: 'Patient Appointment',
    link: './Doctor-page/doctor.html'
  },
  {
    icon: '<i class="bi bi-files fs-5"></i>',
    name: 'Patient Case Studies',
    link: './Doctor-page/doctor.html'
  },
  {
    icon: '<i class="bi bi-prescription fs-5"></i>',
    name: 'Prescription',
    link: './Doctor-page/doctor.html'
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



function displayDashboard() {
  let str = ''
  Dashboard1?.forEach((a) => {
    str += `
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class=" ps-4 bg-white rounded-3 mt-3">
            <div class="row py-2">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <h5>${a?.blurPart?.title}</h5>
                    <h4>${a?.blurPart?.count}</h4> 
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-center">
                    <img style="background-color: #005C8D;" class="mt-2 p-2 rounded-2" src="${a?.blurPart?.Image}" width="50px" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class=" ps-4 bg-white rounded-3 mt-3">
            <div class="row py-2">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <h5>${a?.greenPart?.title}</h5>
                    <h4>${a?.greenPart?.count}</h4> 
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-center">
                    <img style="background-color: rgb(30, 150, 40);" class="mt-2 p-2 rounded-2" src="${a?.greenPart?.Image}" width="50px" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div class=" ps-4 bg-white rounded-3 mt-3">
            <div class="row py-2">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <h5>${a?.orangePart?.title}</h5>
                    <h4>${a?.orangePart?.count}</h4> 
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 text-center">
                    <img style="background-color: orange;" class="mt-2 p-2 rounded-2" src="${a?.orangePart?.Image}" width="50px" alt="">
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById('Dashboard1').innerHTML = str
  })


  let str2 = ''
  Dashboard2?.forEach((a) => {
    str2 += `
        <div class="col-xl-8">
          <div class=" bg-white rounded-3 text-center">
            <p class="fs-4 pt-4">${a?.firstPart?.title} </p>
            <img src="${a?.firstPart?.Image}" width="100%" alt="">
          </div>
        </div>
        <div class="col-xl-4 mt-xl-0 mt-sm-4">
          <div class="bg-white rounded-3">
            <div class="row ps-3 pt-4">
              <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                <p class="fs-4 mt-2">${a?.secondPart?.title}</p>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 text-white pt-3 px-4 rounded-3 mt-3" style="background-color: #fd0049; height: max-content; width: max-content;">
                <p>${a?.secondPart?.Weekly}</p>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-3 px-4 rounded-3 mt-3">
                  <p>${a?.secondPart?.Monthly}</p>
                </div>
              <div class="col-xl-8 col-lg-9 col-md-9 mt-4">
                  <p class="mb-0">${a?.secondPart?.week?.curWeek}</p>
                  <p class="fs-2 mt-1">${a?.secondPart?.week?.weekEarning}</p>
                  <p><span style="color: #fd0049;">${a?.secondPart?.week?.prevWeek?.prevWeekEarning}</span> ${a?.secondPart?.week?.prevWeek?.prevWeek}</p>
              </div>
              <div class="col-xl-4 col-lg-3 col-md-3 mt-5">
                <img src="${a?.secondPart?.week?.earnImg}" alt="">
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 text-center">
                  <img src="${a?.secondPart?.Analytics1?.img}" alt="">
                  <p class="mt-3">${a?.secondPart?.Analytics1?.description}</p>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5 text-center">
                  <img src="${a?.secondPart?.Analytics2?.img}" alt="">
                  <p class="mt-3">${a?.secondPart?.Analytics2?.description}</p>
             </div>
          </div>
      </div>
  </div>
  <div class="col-12 mt-5">
      <div class=" bg-white pb-2 mb-2 pt-4 px-4 rounded-3">
          <p>${a.copyRight}</p>
    </div>
  </div>
    `
  })
  document.getElementById('Dashboard-2').innerHTML = str2


  let str3 = ""
  sidebarUL?.forEach((a) => {
    str3 += `
      <a href="#" class="sidebar-link border-top border-bottom">
        <img style="border-radius: 50%; margin-left: -10px;" src="${a.img}"
            width="40px" height="40px" alt="">
        <span class="ps-4 fw-bold fs-6">${a.name}</span>
      </a>
    `
  })
  document.getElementById('sidebar-item').innerHTML = str3


  let str4 = ""
  sidebarUL1?.forEach((a) => {
    str4 += `
    <li class="sidebar-item">
      <a href="${a?.link}" class="sidebar-link mt-1">
        ${a?.icon}
        <span class="fw-bold fs-6">${a?.name}</span>
      </a>
    </li>
    `
  })
  document.getElementById('sidebar-li').innerHTML = str4


  let str5 = ""
  navbar?.forEach((a) => {
    str5 += `
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
  document.getElementById('navbar-nav').innerHTML = str5
}
displayDashboard()