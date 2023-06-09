
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';
// import { ComingSoonPageComponent } from './pages/others/coming-soon/coming-soon.component';
import { IndexComponent } from './pages/home/index/index.component';
import { PrivacyComponent } from './pages/home/privacy/privacy.component';
import { TermsComponent } from './pages/home/terms/terms.component';
import { AboutNutriComponent } from './pages/home/about-nutri/about-nutri.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { FAQComponent } from './pages/home/faq/faq.component';
import { SuccessComponent } from './pages/home/success/success.component';
import { ShippingComponent } from './pages/home/shipping/shipping.component';
import { SocialauthComponent } from './pages/home/socialauth/socialauth.component';
import { EmailverifyComponent } from './pages/home/emailverify/emailverify.component';
import { ForgotpasswordComponent } from './pages/home/forgotpassword/forgotpassword.component';
import { SingleComponent } from './shared/single/single.component';
import { CancelpolicyComponent } from './pages/home/cancelpolicy/cancelpolicy.component';
import { OrderPolicyComponent } from './pages/home/orderpolicy/orderpolicy.component';
import { ReturnExchangeComponent } from './pages/home/returnexchange/returnexchange.component';
import { SizeguideComponent } from './pages/home/sizeguide/sizeguide.component';
import { TermsconditionComponent } from './pages/home/termscondition/termscondition.component';
import { Index2Component } from './pages/home/index2/index2.component';


const routes: Routes = [
	
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: IndexComponent
			},
			{
				path: 'privacy',
				component: PrivacyComponent
			},
			{
				path: 'warranty',
				component: TermsComponent
			},
			{
				path: 'return-policy',
				component: ReturnExchangeComponent
			},
			{
				path: 'terms-&-conditions',
				component: TermsconditionComponent
			},
			{
				path: 'index2',
				component: Index2Component
			},
			// {
			// 	path: 'aboutUs',
			// 	component: AboutNutriComponent
			// },
			// {
			// 	path: 'contactUs',
			// 	component: ContactUsComponent
			// },
			// {
			// 	path: 'FAQ',
			// 	component: FAQComponent
			// },
			{
				path: 'shippingpolicy',
				component: ShippingComponent
			},
			{
				path: 'success',
				component: SuccessComponent
			},

			// {
			// 	path: 'cancelpolicy',
			// 	component: CancelpolicyComponent
			// },
			// {
			// 	path: 'orderpolicy',
			// 	component: OrderPolicyComponent
			// },
			// {
			// 	path: 'returnexchange',
			// 	component: ReturnExchangeComponent
			// },
			// {
			// 	path: 'sizeguide',
			// 	component: SizeguideComponent
			// },
			
			// {
			// 	path: 'socialauth',
			// 	component: SocialauthComponent
			// },
			{
				path: 'emailverify',
				component: EmailverifyComponent
			},

			{
				path: 'forgotpassword',
				component: ForgotpasswordComponent							
			},
			
			// {
			// 	path: 'elements',
			// 	loadChildren: () => import( './pages/elements/elements.module' ).then( m => m.ElementsModule )
			// },
			// {
			// 	path: 'blog',
			// 	loadChildren: () => import( './pages/blog/blog.module' ).then( m => m.BlogModule )
			// },
			// {
			// 	path: 'pages',
			// 	loadChildren: () => import( './pages/others/pages.module' ).then( m => m.PagesModule )
			// },
			{
				path: 'shop',
				loadChildren: () => import( './pages/shop/shop.module' ).then( m => m.ShopModule )
			},
			{
				path: 'product',
				loadChildren: () => import( './pages/product/product.module' ).then( m => m.ProductModule )
			}
			
			
		]
	},

	{
		path: 'gmail',
		component: SingleComponent,
		children: [
			{
				path: 'socialauth',
				pathMatch: 'full',
				component: SocialauthComponent
			},
		]
	},
	
	{
		path: '**',
		redirectTo: '/pages/404'
	}
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes, { useHash: false, anchorScrolling: 'disabled', scrollPositionRestoration: 'disabled' } ) ],
	exports: [ RouterModule ]
} )

export class AppRoutingModule { }