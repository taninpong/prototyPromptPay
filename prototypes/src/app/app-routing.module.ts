import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'listpromptpay',
    pathMatch: 'full'
  },
  {
    path: 'cart-edit-template',
    loadChildren: () => import('./cart-edit-template/cart-edit-template.module').then(m => m.CartEditTemplatePageModule)
  },
  {
    path: 'cart-checkout-template',
    loadChildren: () => import('./cart-checkout-template/cart-checkout-template.module').then(m => m.CartCheckoutTemplatePageModule)
  },
  {
    path: 'option-dialog-template',
    loadChildren: () => import('./option-dialog-template/option-dialog-template.module').then(m => m.OptionDialogTemplatePageModule)
  },
  {
    path: 'cart-dialog-template',
    loadChildren: () => import('./cart-dialog-template/cart-dialog-template.module').then(m => m.CartDialogTemplatePageModule)
  },
  {
    path: 'form-template',
    loadChildren: () => import('./form-template/form-template.module').then(m => m.FormTemplatePageModule)
  },
  {
    path: 'form-binding',
    loadChildren: () => import('./form-binding/form-binding.module').then(m => m.FormBindingPageModule)
  },
  {
    path: 'form-send-data',
    loadChildren: () => import('./form-send-data/form-send-data.module').then(m => m.FormSendDataPageModule)
  },
  {
    path: 'form-receive-data',
    loadChildren: () => import('./form-receive-data/form-receive-data.module').then(m => m.FormReceiveDataPageModule)
  },
  {
    path: 'memory',
    loadChildren: () => import('./memory/memory.module').then(m => m.MemoryPageModule)
  },
  {
    path: 'list-template',
    loadChildren: () => import('./list-template/list-template.module').then(m => m.ListTemplatePageModule)
  },
  {
    path: 'form-input-template',
    loadChildren: () => import('./form-input-template/form-input-template.module').then(m => m.FormInputTemplatePageModule)
  },
  {
    path: 'condition-template',
    loadChildren: () => import('./condition-template/condition-template.module').then(m => m.ConditionTemplatePageModule)
  },
  {
    path: 'agreement-template',
    loadChildren: () => import('./agreement-template/agreement-template.module').then(m => m.AgreementTemplatePageModule)
  },
  {
    path: 'consent-info-user-template',
    loadChildren: () => import('./consent-info-user-template/consent-info-user-template.module').then(m => m.ConsentInfoUserTemplatePageModule)
  },
  {
    path: 'consent-info-manager-template',
    loadChildren: () => import('./consent-info-manager-template/consent-info-manager-template.module').then(m => m.ConsentInfoManagerTemplatePageModule)
  },
  {
    path: 'home-template',
    loadChildren: () => import('./home-template/home-template.module').then(m => m.HomeTemplatePageModule)
  },
  {
    path: 'home-prompt-pay',
    loadChildren: () => import('./home-prompt-pay/home-prompt-pay.module').then(m => m.HomePromptPayPageModule)
  },
  {
    path: 'account-select',
    loadChildren: () => import('./account-select/account-select.module').then(m => m.AccountSelectPageModule)
  },
  {
    path: 'transfer-to',
    loadChildren: () => import('./transfer-to/transfer-to.module').then(m => m.TransferToPageModule)
  },
  {
    path: 'ppay-payment-creating',
    loadChildren: () => import('./ppay-payment-creating/ppay-payment-creating.module').then(m => m.PpayPaymentCreatingPageModule)
  },
  {
    path: 'ppay-payment-confirm',
    loadChildren: () => import('./ppay-payment-confirm/ppay-payment-confirm.module').then(m => m.PpayPaymentConfirmPageModule)
  },
  {
    path: 'ppay-payment-detail',
    loadChildren: () => import('./ppay-payment-detail/ppay-payment-detail.module').then(m => m.PpayPaymentDetailPageModule)
  },
  {
    path: 'account-bank-select',
    loadChildren: () => import('./account-bank-select/account-bank-select.module').then(m => m.AccountBankSelectPageModule)
  },
  {
    path: 'account-bank-select2',
    loadChildren: () => import('./account-bank-select2/account-bank-select2.module').then(m => m.AccountBankSelect2PageModule)
  },
  {
    path: 'home-standardqr',
    loadChildren: () => import('./home-standardqr/home-standardqr.module').then(m => m.HomeStandardqrPageModule)
  },
  {
    path: 'ppay-payment-success',
    loadChildren: () => import('./ppay-payment-success/ppay-payment-success.module').then(m => m.PpayPaymentSuccessPageModule)
  },
  {
    path: 'ppay-payment-eslip',
    loadChildren: () => import('./ppay-payment-eslip/ppay-payment-eslip.module').then(m => m.PpayPaymentEslipPageModule)
  },
  {
    path: 'listpromptpay',
    loadChildren: () => import('./listpromptpay/listpromptpay.module').then(m => m.ListpromptpayPageModule)
  },
  {
    path: 'ppay-payment-creatingx',
    loadChildren: () => import('./ppay-payment-creatingx/ppay-payment-creatingx.module').then( m => m.PpayPaymentCreatingxPageModule)
  },
  {
    path: 'ppay-payment-confirmx',
    loadChildren: () => import('./ppay-payment-confirmx/ppay-payment-confirmx.module').then( m => m.PpayPaymentConfirmxPageModule)
  },
  {
    path: 'ppay-payment-detailx',
    loadChildren: () => import('./ppay-payment-detailx/ppay-payment-detailx.module').then( m => m.PpayPaymentDetailxPageModule)
  },
  {
    path: 'ppay-payment-eslipx',
    loadChildren: () => import('./ppay-payment-eslipx/ppay-payment-eslipx.module').then( m => m.PpayPaymentEslipxPageModule)
  },
  {
    path: 'ppay-payment-successx',
    loadChildren: () => import('./ppay-payment-successx/ppay-payment-successx.module').then( m => m.PpayPaymentSuccessxPageModule)
  },  {
    path: 'exchange',
    loadChildren: () => import('./exchange/exchange.module').then( m => m.ExchangePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
