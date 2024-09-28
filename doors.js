const doors = [
    {
        "name": "باب 1",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي أنيق يضيف لمسة فاخرة لمنزلك.",
        "image": "door1.jfif"
    },
    {
        "name": "باب 2",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مثالي مع تصميم حديث يناسب كل الأذواق.",
        "image": "door2.jfif"
    },
    {
        "name": "باب 3",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي متين يجمع بين الجمال والوظائف.",
        "image": "door3.jfif"
    },
    {
        "name": "باب 4",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي فريد يمنح منزلك لمسة شخصية.",
        "image": "door4.jfif"
    },
    {
        "name": "باب 5",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي عصري يناسب كل ديكورات المنزل.",
        "image": "door5.jfif"
    },
    {
        "name": "باب 6",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي ساحر يضفي أجواء دافئة على الغرفة.",
        "image": "door6.jfif"
    },
    {
        "name": "باب 7",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مبتكر يجعل مدخل منزلك مميزًا.",
        "image": "door7.jfif"
    },
    {
        "name": "باب 8",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بسيط يبرز جمال الطبيعة.",
        "image": "door8.jfif"
    },
    {
        "name": "باب 9",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي كلاسيكي يجسد الرقي والذوق الرفيع.",
        "image": "door9.jfif"
    },
    {
        "name": "باب 10",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يضيف لمسة فريدة على منزلك.",
        "image": "door10.jfif"
    },
    {
        "name": "باب 11",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يناسب الطراز العصري.",
        "image": "door11.jfif"
    },
    {
        "name": "باب 12",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يضفي إحساسًا بالراحة في المنزل.",
        "image": "door12.jfif"
    },
    {
        "name": "باب 13",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بتصميم فريد يلفت الأنظار.",
        "image": "door13.jfif"
    },
    {
        "name": "باب 14",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي عصري يعكس ذوقك الرفيع.",
        "image": "door14.jfif"
    },
    {
        "name": "باب 15",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مثالي لكل منزل.",
        "image": "door15.jfif"
    },
    {
        "name": "باب 16",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يجمع بين الجمال والعملية.",
        "image": "door16.jfif"
    },
    {
        "name": "باب 17",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي أنيق لتصميم داخلي مذهل.",
        "image": "door17.jfif"
    },
    {
        "name": "باب 18",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يجعل أي غرفة تبدو أكثر جمالاً.",
        "image": "door18.jfif"
    },
    {
        "name": "باب 19",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يقدم لك خيارًا مثاليًا لمختلف الأذواق.",
        "image": "door19.jfif"
    },
    {
        "name": "باب 20",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يناسب كل الأجواء.",
        "image": "door20.jfif"
    },
    {
        "name": "باب 21",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يتميز بتصميمه الفريد.",
        "image": "door21.jfif"
    },
    {
        "name": "باب 22",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مع تفاصيل رائعة.",
        "image": "door22.jfif"
    },
    {
        "name": "باب 23",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مع لمسة عصرية.",
        "image": "door23.jfif"
    },
    {
        "name": "باب 24",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يعكس روح العصر الحديث.",
        "image": "door24.jfif"
    },
    {
        "name": "باب 25",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مميز لتصميم داخلي جذاب.",
        "image": "door25.jfif"
    },
    {
        "name": "باب 26",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي رائع بمظهره الجذاب.",
        "image": "door26.jfif"
    },
    {
        "name": "باب 27",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يضفي طابعًا مميزًا على منزلك.",
        "image": "door27.jfif"
    },
    {
        "name": "باب 28",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بتصميم مريح وبسيط.",
        "image": "door28.jfif"
    },
    {
        "name": "باب 29",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يبرز جمال المنزل.",
        "image": "door29.jfif"
    },
    {
        "name": "باب 30",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يجمع بين الراحة والجمال.",
        "image": "door30.jfif"
    },
    {
        "name": "باب 31",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بألوان متنوعة تناسب جميع الأذواق.",
        "image": "door31.jfif"
    },
    {
        "name": "باب 32",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يضفي سحرًا خاصًا على أي غرفة.",
        "image": "door32.jfif"
    },
    {
        "name": "باب 33",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بلمسات فنية فريدة.",
        "image": "door33.jfif"
    },
    {
        "name": "باب 34",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بتصميم بسيط وجذاب.",
        "image": "door34.jfif"
    },
    {
        "name": "باب 35",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يمنح منزلك مظهرًا رائعًا.",
        "image": "door35.jfif"
    },
    {
        "name": "باب 36",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يجمع بين الأداء العالي والأناقة.",
        "image": "door36.jfif"
    },
    {
        "name": "باب 37",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يضمن لك الخصوصية والأمان.",
        "image": "door37.jfif"
    },
    {
        "name": "باب 38",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مع تصميم رائع مناسب للجميع.",
        "image": "door38.jfif"
    },
    {
        "name": "باب 39",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بتصميم عصري يبرز ذوقك.",
        "image": "door39.jfif"
    },
    {
        "name": "باب 40",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بديكورات مميزة تناسب منزلك.",
        "image": "door40.jfif"
    },
    {
        "name": "باب 41",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي أنيق يعكس روح العصر.",
        "image": "door41.jfif"
    },
    {
        "name": "باب 42",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مميز لكل محبي الديكور.",
        "image": "door42.jfif"
    },
    {
        "name": "باب 43",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يوفر لك الأناقة والراحة.",
        "image": "door43.jfif"
    },
    {
        "name": "باب 44",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يلبي جميع احتياجاتك.",
        "image": "door44.jfif"
    },
    {
        "name": "باب 45",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يجمع بين الجمال والكفاءة.",
        "image": "door45.jfif"
    },
    {
        "name": "باب 46",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يضفي لمسة عصرية لمنزلك.",
        "image": "door46.jfif"
    },
    {
        "name": "باب 47",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي مع تفاصيل جذابة.",
        "image": "door47.jfif"
    },
    {
        "name": "باب 48",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي رائع يضفي جوًا مميزًا على أي غرفة.",
        "image": "door48.jfif"
    },
    {
        "name": "باب 49",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي يبرز جمال المكان.",
        "image": "door49.jfif"
    },
    {
        "name": "باب 50",
        "price": "2400 درهم مع التركيب",
        "measurements": "2,15م / 1,10م",
        "description": "باب خشبي بتصميم عصري يلبي جميع الأذواق.",
        "image": "door50.jfif"
    }
];


function displayDoors() {
    const container = document.getElementById('doorsContainer').querySelector('.row');

    doors.forEach((door, index) => {
        const doorElement = document.createElement('div');
        doorElement.className = 'col-md-4 mb-4';
        doorElement.innerHTML = `
            <div class="card custom-card">
                <img src="${door.image}" alt="${door.name}" class="card__background">
                <div class="card__content">
                    <h5 class="card__title">${door.name}</h5>
                    <p><strong>السعر:</strong> ${door.price}</p>
                    <p><strong>المقاسات:</strong> ${door.measurements}</p>
                    <p>${door.description}</p>
                    <button class="card__button" onclick="buyNow(${index + 1})">اشتري الآن</button>
                </div>
            </div>
        `;
        container.appendChild(doorElement);
    });
}

function buyNow(doorNumber) {
    const whatsappNumber = "+212750162292"; // WhatsApp number
    const message = `أريد شراء الباب رقم ${doorNumber}`; // Message to send
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Open WhatsApp in a new tab
}

// Call the function to display doors
displayDoors();
