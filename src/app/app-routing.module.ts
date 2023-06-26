import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'forgot-pass',
    loadChildren: () => import('./forgot-pass/forgot-pass.module').then( m => m.ForgotPassPageModule)
  },
  {
    path: 'forgot-pass-otp',
    loadChildren: () => import('./forgot-pass-otp/forgot-pass-otp.module').then( m => m.ForgotPassOtpPageModule)
  },
  {
    path: 'set-new-password',
    loadChildren: () => import('./set-new-password/set-new-password.module').then( m => m.SetNewPasswordPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'tracker-no-tasks',
    loadChildren: () => import('./tracker-no-tasks/tracker-no-tasks.module').then( m => m.TrackerNoTasksPageModule)
  },
  {
    path: 'taskslist',
    loadChildren: () => import('./taskslist/taskslist.module').then( m => m.TaskslistPageModule)
  },
  {
    path: 'task-details',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'membership-list',
    loadChildren: () => import('./membership-list/membership-list.module').then( m => m.MembershipListPageModule)
  },
  {
    path: 'membership-details',
    loadChildren: () => import('./membership-details/membership-details.module').then( m => m.MembershipDetailsPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'ngo-profile-noactive',
    loadChildren: () => import('./ngo-profile-noactive/ngo-profile-noactive.module').then( m => m.NgoProfileNoactivePageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'event-joined-success',
    loadChildren: () => import('./event-joined-success/event-joined-success.module').then( m => m.EventJoinedSuccessPageModule)
  },
  {
    path: 'ngo-profile-details',
    loadChildren: () => import('./ngo-profile-details/ngo-profile-details.module').then( m => m.NgoProfileDetailsPageModule)
  },
  // {
  //   path: 'application-form',
  //   loadChildren: () => import('./application-form/application-form.module').then( m => m.ApplicationFormPageModule)
  // },
  // {
  //   path: 'application-sent',
  //   loadChildren: () => import('./application-sent/application-sent.module').then( m => m.ApplicationSentPageModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'change-number',
    loadChildren: () => import('./change-number/change-number.module').then( m => m.ChangeNumberPageModule)
  },
  {
    path: 'change-number-success',
    loadChildren: () => import('./change-number-success/change-number-success.module').then( m => m.ChangeNumberSuccessPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'contact-success',
    loadChildren: () => import('./contact-success/contact-success.module').then( m => m.ContactSuccessPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'create-messages',
    loadChildren: () => import('./create-messages/create-messages.module').then( m => m.CreateMessagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
