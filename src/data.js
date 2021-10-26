export const CVData = {
   personalData: {
     name: 'Jerzy Nowakowski',
     contacts: [
       { type: 'email', value: 'jerzy.contact@protonmail.com' },
       { type: 'phone', value: '+48 665 132 226' },
       { type: 'location', value: 'Kraków' },
       { type: 'github', value: 'https://github.com/jerzy244' }
     ]
   },
   sections: [
     {
       type: 'text',
       title: 'Profil kandydata',
       content: 'Od dłuższego czasu interesuje się programowaniem stron internetowych oraz ich pozycjonowaniem (SEO), a co za tym idzie również UX oraz UI witryn. Mam doświadczenie w prowadzeniu stron w mediach społecznościowych (jeden z projektów w których brałem udział obecnie ma zasięg ponad 100 tys. odbiorców). Posiadam podstawową znajomość języków: HTML, CSS. Nadal uczę się JavaScript’a. Posiadam szeroki zakres wiedzy z obszaru nowych technologii i nowych trendów technologicznych na rynku.',
       icon: 'usertie'
     },
     {
       type: 'common-list',
       title: 'Wykształcenie',
       icon: 'graduation',
       items: [
          {
            title: 'Biologia',
            authority: 'Uniwersytet Jagielloński',
            rightSide: '2018 - 2019'
          },
         {
           title: 'Zarządzanie',
           authority: 'Wyższa Szkoła Zarządzania i Bankowości',
           rightSide: '2020 - 2021'
         },
         {
            title: 'Informatyka',
            authority: 'Wyższa Szkoła Zarządzania i Bankowości',
            rightSide: '2021 - obecnie'
         }
       ]
     },
     {
       type: 'experiences-list',
       title: 'Doświadczenie',
       icon: 'archive',
       items: [
         {
           title: 'Pomoc techniczna',
           company: 'ARGE',
           companyMeta: '',
           datesBetween: '06.2018 – 08.2018',
         },
         {
            title: 'Zarządzanie Social Mediami',
            company: 'Facebook',
            description: 'Zarządzanie grupą o zasięgu 100 tys. członków',
            companyMeta: '',
          }
       ]
     },
     
     {
       type: 'common-list',
       title: 'Języki obce',
       icon: 'language',
       items: [
         {
           authority: 'Angielski',
           authorityMeta: 'B2/C1'
         },
         {
           authority: 'Niemiecki',
           authorityMeta: 'B1'
         }
       ]
     },
     {
       type: 'tag-list',
       title: 'Umiejętności',
       icon: 'rocket',
       items: ['JavaScript', 'CSS', 'HTML', 'Bash', 'Linux', 'C', 'R Studio', 'Git', 'GIMP']
     },
     {
       type: 'tag-list',
       title: 'Moje hobby i zainteresowania',
       icon: 'cubes',
       items: ['Fotografia', 'Nowe technologie', 'Grafika komputerowa']
     }
   ]
 }