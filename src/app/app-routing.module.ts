import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './userDetails/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './mainAbout/about/about.component';
import { ForgotpasswordComponent } from './userDetails/forgotpassword/forgotpassword.component';
import { ServiceComponent } from './websiteServices/service/service.component';
import { environment } from '../environments/environment.development';
import { VerifyEmailComponent } from './userDetails/verify-email/verify-email.component';
import { StartingComponent } from './starting/starting.component';
import { LoginButtonComponent } from './userDetails/login-button/login-button.component';
import { UserInfoComponent } from './userDetails/user-info/user-info.component';
import { PersonalInfoComponent } from './userDetails/personal-info/personal-info.component';
import { EduInfoComponent } from './userDetails/edu-info/edu-info.component';
import { FamilyInfoComponent } from './userDetails/family-info/family-info.component';
import { ContactComponent } from './contactt/contact/contact.component';
import { About1Component } from './mainAbout/about1/about1.component';
import { Service1Component } from './websiteServices/service1/service1.component';
import { Contact1Component } from './contactt/contact1/contact1.component';
import { GroomInformationComponent } from './websiteServices/groom-information/groom-information.component';
import { ResetPasswordComponent } from './userDetails/reset-password/reset-password.component';
import { AdminComponent } from './admin/admin.component';
import { LocationBookingComponent } from './location-booking/location-booking.component';
import { GroomsComponent } from './websiteServices/grooms/grooms.component';
import { BrideInformationComponent } from './websiteServices/bride-information/bride-information.component';
import { BridesComponent } from './websiteServices/brides/brides.component';

import { ChatComponent } from './websiteServices/chat/chat.component';
import { MessageComponent } from './message/message.component';
import { DifferenciatorComponent } from './websiteServices/differenciator/differenciator.component';
import { HomeComponent } from './home/home.component';
import { ContactDataComponent } from './adminComponent/contactdata/contactdata.component';
import { RegistrationComponent } from './userDetails/registration/registration.component';
import { RegistrationDataComponent } from './adminComponent/registration-data/registration-data.component';
import { HelpComponent } from './profile/help/help.component';
import { SettingsPrivacyComponent } from './profile/settings-privacy/settings-privacy.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: LoginButtonComponent },
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path : 'about1' , component : About1Component},
  { path : 'service1' , component : Service1Component},
  { path : 'contact1' , component : Contact1Component},
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'user/:userName', component: UserInfoComponent },
  { path: 'personal/:userName', component: PersonalInfoComponent },
  { path: 'edu/:userName', component: EduInfoComponent },
  { path: 'family/:userName', component: FamilyInfoComponent },
  { path: 'groom-information', component: GroomInformationComponent },
  { path: 'bride-information', component: BrideInformationComponent },
  { path: 'chat', component: ChatComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'reset/:userName', component: ResetPasswordComponent},
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'grooms', component: GroomsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'location-booking', component: LocationBookingComponent},
  { path: 'brides', component: BridesComponent},
  { path: 'message', component: MessageComponent},
  { path: 'differenciator', component: DifferenciatorComponent},
  {path: 'contactdata', component:ContactDataComponent},
  {path: 'registration-data', component: RegistrationDataComponent},
  {path: 'help', component: HelpComponent},
  { path: 'setting-privacy', component: SettingsPrivacyComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
