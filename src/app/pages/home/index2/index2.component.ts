import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { introSlider, brandSlider, cats, testiSlider, specialSlider, trendySlider } from '../data';
import { MasterService } from 'src/app/shared/services/master.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';



declare var $: any;

@Component({
	selector: 'molla-index2',
	templateUrl: './index2.component.html',
	styleUrls: ['./index2.component.scss']
})
export class Index2Component implements OnInit {

	@Input() product: any;
	@Input() topselling:any;

	// product data print onscreen

	cats = cats;
	emailForm?: any
	categoryList: any = []
	categorydata: any = []
	products = [];
	getoffer: any
	posts = [];
	loaded = false;
	introSlider = introSlider;
	brandSlider = brandSlider;
	testiSlider = testiSlider;
	topsellingproductsdata: any []
	wishlistvar:boolean = false
	loader: boolean = false;


	constructor(public apiService: ApiService,
		public utilsService: UtilsService,
		private modalService: ModalService,
		private master: MasterService,
		private category: CategoryService,
		private wishlistService: WishlistService,
		private router: Router,
        private cartService: CartService,
		private toaster: ToastrService) {
		this.emailForm = new FormGroup({
			email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")])
		})
	}

	// guar

	ngOnInit(): void {
		this.offerList()
		this.getlist()
		this.getproduct()
		this.topsellingproducts('Geonix SSD')
	}

	offerList() {
		this.master.getMethod('/offer/list').subscribe(res => {
			this.getoffer = res
			console.log("offerlist", this.getoffer)
			localStorage.setItem("offerData", JSON.stringify(res));
			// this.offerService.setofferList(res);
		})
	}


	// onsubmit(){
	// 	var email = this.emailForm.get("email")?.value;
	// 	alert(email);
	// };

	onSave() {
		// this.loader = true;

		var email = this.emailForm.get("email").value;
		// alert(email)
		if (email == "" || email == null) {
			this.toaster.error("Please Enter The Email");
			return false
		} else {
			var data = {
				service_id: 'service_8zp4yhp',
				template_id: 'template_g2neitr',
				user_id: 'user_mTjMBBP092bpZsnZTyLfp',
				template_params: {
					// 'company': 'Black Brusa',
					'to_mail': 'princeantil2608@gmail.com',
					'user_email': email
				}
			};

			this.master.sendMail(data).subscribe(res => {

				// this.loader = false;

			}, err => {
				// this.loader = false;

				this.toaster.success("Subscribed Successfully!")
				this.emailForm.reset()
			});
			return true
		}


	}

	getlist() {
		this.master.getMethod("/GetCategories").subscribe(data => {
			// console.log(data);
			this.categorydata = data;
			// console.log("this.categoryList",this.categoryList)
			this.category.setCategoryList(data)
			// console.log("list-slider",this.categoryList)
		})
	}

	getproduct() {
		this.master.getMethod("/product/list").subscribe(res => {
			console.log("product-list", res['data'])
			this.products = res['data'];
			console.log("this.productssss");
			console.log('this is console for index two new arrival', this.products);
			this.loaded = true;
		})
	}

	// my script for index page

	imgback: any

	images = [
		{
			img: "assets/images/HDD/LAPTOP/1TB.jpg",
			imgback: "https://ciseco-nextjs.vercel.app/_next/static/media/explore1.bafb60cf.svg",
			catname: 'HDD'
		},
		{
			img: "assets/images/MOTHER BOARD/G41 D2.jpg",
			imgback: "https://ciseco-nextjs.vercel.app/_next/static/media/explore2.46138c9a.svg",
			catname: 'MOTHER BOARD'
		},
		{
			img: "assets/images/PRINTER TONER/2365.jpg",
			imgback: "https://ciseco-nextjs.vercel.app/_next/static/media/explore3.8526de42.svg",
			catname: 'PRINTER TONER'
		},
		{
			img: "assets/images/GRAPHIC CARD/1GB.jpg",
			imgback: "https://ciseco-nextjs.vercel.app/_next/static/media/explore9.0d4aa2f6.svg",
			catname: 'GRAPHIC CARD'
		},
		{
			img: "assets/images/RISER CARD/RISER CARD.jpg",
			imgback: "https://ciseco-nextjs.vercel.app/_next/static/media/explore5.4a34ab29.svg",
			catname: 'RISER CARD'
		}
	];

	slideConfig = {
		"slidesToShow": 3,
		"slidesToScroll": 1,
		"dots": false,
		"infinite": true,
		"autoplay": true,
		"autoplaySpeed": 1000,
		'responsive': [
			{
				'breakpoint': 768,
				'settings': {
					'slidesToShow': 2
				}
			},
			{
				'breakpoint': 576,
				'settings': {
					'slidesToShow': 1
				}
			}
		]
	};

	addSlide() {
		this.images.push(
			{
				img: "https://images.unsplash.com/photo-1581924498057-96568f743589?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzN3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				imgback: "https://ciseco-nextjs.vercel.app/_next/static/media/explore1.bafb60cf.svg",
				catname: 'HDD'
			})
	}

	removeSlide() {
		this.images.length = this.images.length - 1;
	}

	// toggle nav bar menu
	// wishlist functionality

	addToWishlist(event: Event) {
		// event.preventDefault();
		this.product = event;
		if (this.isInWishlist()) {
			this.router.navigate(['/shop/wishlist']);
		} else {
			this.wishlistService.addToWishList(this.product);
		}
	}

	isInWishlist() {
			return this.wishlistService.isInWishlist(this.product);
	}

	wishliststyle(){
		this.wishlistvar = true
	  }

	//   add to cart functionality

	addToCart(event: Event) {
        // event.preventDefault();
		this.product = event;
        this.cartService.addToCart(this.product);
	}

	topsellingproducts(event: string) {
		this.topselling = event
		console.log('try console my tab function', this.topselling);
		this.topsellingproductsdata = this.products.filter(element => element.category.name == this.topselling)
		console.log(this.products)
		console.log('console filter data top selling products' ,this.topsellingproductsdata)
	}
	
}
