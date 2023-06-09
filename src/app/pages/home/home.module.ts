import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'angular-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../shared/shared.module';

// import { SpecialCollectionComponent } from './special-collection/special-collection.component';
// import { TopCollectionComponent } from './top-collection/top-collection.component';
import { IndexComponent } from './index/index.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutNutriComponent } from './about-nutri/about-nutri.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQComponent } from './faq/faq.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from './success/success.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SocialauthComponent } from './socialauth/socialauth.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CancelpolicyComponent } from './cancelpolicy/cancelpolicy.component';
import { ReturnExchangeComponent } from './returnexchange/returnexchange.component';
import { OrderPolicyComponent } from './orderpolicy/orderpolicy.component';
import { SizeguideComponent } from './sizeguide/sizeguide.component';
import { SpecialCollectionComponent } from './special-collection/special-collection.component';
import { TopCollectionComponent } from './top-collection/top-collection.component';
import { TrendyCollectionComponent } from './trendy-collection/trendy-collection.component';
// import { BlogCollectionComponent } from './blog-collection/blog-collection.component';
import { RecommendCollectionComponent } from './recommend-collection/recommend-collection.component';
import { ModalBasicComponent } from './index/modal-basic/modal-basic.component';
import { CarouselBasicComponent } from './index/carousel-basic/carousel-basic.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { Index2Component } from './index2/index2.component';


@NgModule({
	declarations: [
		SpecialCollectionComponent,
		TopCollectionComponent,
		IndexComponent,
  PrivacyComponent,
  TermsComponent,
  AboutNutriComponent,
  ContactUsComponent,
  FAQComponent,
  SuccessComponent,
  ShippingComponent,
  SocialauthComponent,
  EmailverifyComponent,
  ForgotpasswordComponent,
  CancelpolicyComponent,
  ReturnExchangeComponent,
  OrderPolicyComponent,
  SizeguideComponent,
	TrendyCollectionComponent,
  RecommendCollectionComponent,
  ModalBasicComponent,
  CarouselBasicComponent,
  TermsconditionComponent,
  Index2Component,
		// BlogCollectionComponent
	],

	imports: [
		CommonModule,
		RouterModule,
		NgbModule,
		OwlModule,
		SharedModule,
		CarouselModule,
		FormsModule,
		ReactiveFormsModule
	], schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})

export class HomeModule { }
