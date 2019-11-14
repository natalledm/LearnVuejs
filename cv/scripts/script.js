let sidebar = {
    profilePicture: 'static/daria.jpg',
    contactInfo: {
        email: 'doria@doria.com',
        phoneNumber: '+404 0700000000',
        location: 'Livetown, Anywhere, Some Country',
        linkedin: 'linkedin.com/doriaanimated',
        github: 'github.com/doriaanimated'
    },
    skills: ['HTML5', 'CSS', 'Javascript', 'Git', 'Django', 'MySQL']
}

let image = document.querySelector('.photo')
image.setAttribute('src', sidebar.profilePicture)


const  contactInfoTemplate = 
    `<ul>
        <li><i class="fas fa-at icon"></i><a href="mailto:${sidebar.contactInfo.email}">${sidebar.contactInfo.email}</a></li>
        <li><i class="fas fa-mobile-alt icon"></i><a href="tel:${sidebar.contactInfo.phoneNumber}">${sidebar.contactInfo.phoneNumber}</a></li>
        <li><i class="fas fa-map-marker-alt icon"></i><address class="location">${sidebar.contactInfo.location}</address></li>
        <li><i class="fab fa-linkedin icon"></i><a href="${sidebar.contactInfo.linkedin}">${sidebar.contactInfo.linkedin}</a></li>
        <li><i class="fab fa-github icon"></i><a href="${sidebar.contactInfo.github}">${sidebar.contactInfo.github}</a></li>
    </ul>`

document.querySelector('.contact-info').insertAdjacentHTML('afterbegin', contactInfoTemplate)

let skillTemplate = ''

sidebar.skills.forEach(function(skill){
    skillTemplate +=`<mark class="skill">${skill}</mark>`
})

document.querySelector('.skills').insertAdjacentHTML('beforeend', skillTemplate)
