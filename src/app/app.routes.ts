import { Routes } from '@angular/router';
import { Career } from './career/career';
import { Home } from './home/home';
import { Education } from './education/education';
import { ContactUs } from './contact-us/contact-us';
import { homedir } from 'os';
import { Footer } from './footer/footer';
import { Intrests } from './intrests/intrests';
import { Projects } from './projects/projects';
import { CloudDevOps } from './cloud-dev-ops/cloud-dev-ops';
import { Certifications } from './certifications/certifications';

export const routes: Routes =
//  [
//   { path: 'home', component: Home, children: [
//       { path: 'career', component: Career },
//       { path: 'education', component: Education },
//       { path: 'contact-us', component: ContactUs },
//       { path:'intrests',component:Intrests},
//       { path:'footer',component:Footer}
//     ]
//   }
// ];
[
  {
    path: 'home',
    component: Home,
    children: [
      // ✅ DEFAULT PAGE INSIDE HOME
      { path: '', redirectTo: 'career', pathMatch: 'full' },
      { path: 'career', component: Career },
      { path: 'projects', component: Projects },
      { path: 'cloud-devops', component: CloudDevOps},
      { path: 'Certifications', component:Certifications},
      { path: 'education', component: Education },
      { path: 'contact-us', component: ContactUs },
      { path: 'intrests', component: Intrests }
    ]
  },
  // ✅ ROOT REDIRECT
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // ✅ FALLBACK
  { path: '**', redirectTo: 'home' }
];