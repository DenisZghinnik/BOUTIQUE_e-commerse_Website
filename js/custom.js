$(function() {
var newItems = [{
	name: 'Rubashka',
	id: 1,
	count: '5',
	onSale: 'true',
	onNew: 'false',
	prevPrice: '200',
	newPrice: '150',
	onStars: 'true',
	starsCount: '5',
	img: 'img/shop-items/Layer 5.png'
	},
	{
	name: 'Jeans',
	id: 2,
	count: '5',
	onSale: 'false',
	onNew: 'true',
	prevPrice: '300',
	newPrice: '0',
	onStars: 'false',
	starsCount: '0',
	img: 'img/shop-items/Layer 2.png'
	},
	{
	name: 'Topic with straz',
	id: 3,
	count: '5',
	onSale: 'false',
	onNew: 'false',
	prevPrice: '700',
	newPrice: '0',
	onStars: 'false',
	starsCount: '0',
	img: 'img/shop-items/Layer 3.png'
	},
	{
	name: 'T-shirt for real bro',
	id: 4,
	count: '5',
	onSale: 'true',
	onNew: 'true',
	prevPrice: '1000',
	newPrice: '799',
	onStars: 'true',
	starsCount: '5',
	img: 'img/shop-items/Layer 6.png'
	},
	{
	name: 'Beatiful shorts',
	id: 5,
	count: '5',
	onSale: 'true',
	onNew: 'false',
	prevPrice: '500',
	newPrice: '399',
	onStars: 'false',
	starsCount: '0',
	img: 'img/shop-items/Layer 21.png'
	},
	{
	name: 'Beatiful shorts',
	id: 6,
	count: '5',
	onSale: 'true',
	onNew: 'false',
	prevPrice: '500',
	newPrice: '399',
	onStars: 'false',
	starsCount: '0',
	img: 'img/shop-items/Layer 21.png'
	},
	{
	name: 'Beatiful shorts',
	id: 7,
	count: '5',
	onSale: 'true',
	onNew: 'false',
	prevPrice: '500',
	newPrice: '399',
	onStars: 'false',
	starsCount: '0',
	img: 'img/shop-items/Layer 21.png'
	}
];
function createItem(arrayOfItems, adres) {

			const sale = `<div class="sale">Sale</div>`;
			const neww = `<div class="new">New</div>`;
			var stars = '';

			function starMaker(obj)	{
				let count = obj.starsCount;
				for(count; count > 0; count--){
						stars+=`<i class="fas fa-star"></i>`;
					}
			};	
			$(adres).empty();
			arrayOfItems.map(function(a){

				var promo = `<div class="item-product__promotion">
												${a.onSale === 'true' ? sale : ''}
												${a.onNew === 'true' ? neww : ''}
										 </div>`;
				
				var price = a.onSale === 'true' ? `<p class="item-product__price item-product__price--onSale">$${a.newPrice}<s class="disc">$${a.prevPrice}</s></p>`
														 : `<p class="item-product__price">$${a.prevPrice}</p>`;		 

				if(a.onStars){starMaker(a)};

				$(adres).append(` 
					<div class="item-product arrivals__item-product">
						<div class="item-product__content" id='${a.id}' style="background-image: url('${a.img}');">
							<div class="item-product__buttons">
								<a class="item-product__link" href="#"><i class="fas fa-shopping-cart"></i></a>
								<a class="item-product__link" href="#"><i class="fas fa-heart"></i></a>
								<a class="item-product__link" href="#"><i class="fas fa-exchange-alt"></i></a>
								<a class="item-product__link" href="#"><i class="fas fa-search"></i></a>
							</div>
							${promo}
						</div>
						<div class="item-product__description">
							<p class="subtitle">${a.name}</p>
							${price}
							<span class="item-product__stars">${stars}</span>
						</div>	
					</div>`);
				stars = '';
			});

 	};

	createItem(newItems, '#arrivals__carousel');
	createItem(newItems, '#all-carousel');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	 $('.dropdown__button').on('click', function(){

	 		const dropdownID = $(this)[0].name;
	 		const dropdownChild = $(this).next();

	 		if(!$(dropdownID).hasClass('active') &&
	 		 	 !dropdownChild.hasClass('active')) {

	 			$('.active').removeClass('active');
	 			event.stopPropagation();
	 			
	 			dropdownChild.addClass('active');
	 			return $(dropdownID).addClass('active');
	 		}

		 	$('.active').removeClass('active');
		 	event.stopPropagation();
	});

	$('.dropdown__content').on('mouseleave', function(){
		 	$('.active').removeClass('active');
		 	event.stopPropagation();
	});

 	$('.dropdown__content').on('click', function(){
 		event.stopPropagation();
 	});

 	$(document).on('click', function(){
	 	$('.active').removeClass('active');
	 	event.stopPropagation();
 	});

	
  $('#arrivals__carousel').slick({
 	  slidesToShow: 4,
 	  responsive: [
 		{
      breakpoint: 998,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
			]
  });

 	$('#partners__carousel, #all-carousel').slick({
 		slidesToShow: 5,
 		responsive: [
 		{
      breakpoint: 1190,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }

  ]
 	});

 	$('#reviews-carousel').slick();

 	$('#news-carousel').slick({
 		slidesToShow: 3,
 		responsive:[
 		{
      breakpoint: 1190,
      settings: {
        slidesToShow: 2,
      }
    },
     {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }

  ]

 });
/////////////////////////////////////////////////////////////////////////////////
	function createId (arr) {
	 	var id = Math.ceil(Math.random() * 1000);
	 	while(arr.some(function(a){return a.id===id})){
	 		id = Math.ceil(Math.random() * 1000);
	 	};
	 	return id
	};

 	function createObj (newItemProp, item) {
 		let newItem = {};
 		function addProp(prop){
		 	const name = prop.name;
		 	const value = prop.value;
		 	return (item ? item : newItem)[name]=value;
	 	}
	 	newItemProp.map(addProp);
	 	return item ? item : newItem
	};

	function actEnd (item, actType, target, slidesShow, id) {
		$('.itm').removeClass('input-active');
		function addItemToCarousel (){
			$(target).slick('unslick');
			createItem(item, target);
			$(target).slick({
	 			slidesToShow: slidesShow,
	 			responsive: [
 		{
      breakpoint: 998,
      settings: {
        slidesToShow: slidesShow-1,
      }
    },
			]});
		};
		function changeStatus (status){
			$('.status').html(status);
			$('.check').addClass('input-active');
		};
		switch(actType) {
			case 'refresh':
				$('.itm').addClass('input-active');
				createItem(item, '.itm');
				break;
			case 'create':
				addItemToCarousel();
				changeStatus(`Created!<br> ID: ${id}`);
				break;
			case 'change':
				addItemToCarousel();
				changeStatus('Change Saved!');
				break;
			case 'delete':
				addItemToCarousel();
				changeStatus('Deleted!');
				break;
		};
		changeArrow();
	};

	function resetForm () {
		$('.form-active').removeClass('form-active');
		$('.input-active').removeClass('input-active');
		$('#create')[0].reset();
		$('.change-form')[0].reset();
		$('.status').html('Preview');
		$('#login-form').removeClass('displayNone');
		$('.logined').removeClass('input-active');
		$('#id-input').prop('disabled', false);
		$('#id-input_delete').prop('disabled', false);
		$('.find-new').removeClass('displayInBlock');
	};
	function getItemIndex(from){
		const id = +$(from).val();
		const itemIndex = newItems.findIndex(function(a){return a.id === id});
		return itemIndex;
	}

	function wrongIdCheck(item){
		$('.wrong-id').removeClass('input-active');
		if(!item){
			$('.input-active').removeClass('input-active');
			$('.wrong-id').addClass('input-active');
			return false;
		};
		return true;
	};

	$('.refresh-btn_create').on('click', function(e){
		const newItemProp = $('#create').serializeArray();
		const item = createObj(newItemProp);
		actEnd([item], 'refresh');
	});

	$('#create').submit(function(e){
		const newItemProp = $('#create').serializeArray();
		const item = createObj(newItemProp);
		item.id = createId(newItems);
		newItems.unshift(item);
		actEnd(newItems, 'create', '#arrivals__carousel', 4, item.id);	
	});


	$('.find-btn').on('click', function(){
		const item = newItems[getItemIndex('#id-input')];
		if(!wrongIdCheck(item)){
			return;
		};
		const itemKeys = Object.entries(item);
		
		function setInput (prop) {
			const input = $(`input[name=${prop[0]}]`, '.change-form');
			if(input.is(':checkbox')){
				if(prop[1]==='true'){
					input.prop('checked', true);
				}else{
					input.prop('checked', false);
				};
			} else{
				input.val(prop[1]);
			};
			function showExtraInput(triggerName){
				if(prop[0]===triggerName){
					if(input.is(':checked')) {
						$($(`.${triggerName}`)[1].id).addClass('input-active');
					} else {
						$($(`.${triggerName}`)[1].id).removeClass('input-active');
					};
				};
			};
			showExtraInput('onSale');
			showExtraInput('onStars');
			$('#id-input').prop('disabled', true);
			$('#find-new').addClass('displayInBlock');
		};

		itemKeys.map(setInput);
		$('.change-form').addClass('input-active');
		actEnd([item], 'refresh')
	});

	$('.refresh-btn_change').on('click', function(){
		const changeItemProps = $('#change-form').serializeArray();
		const item = newItems.slice(getItemIndex('#id-input'), getItemIndex('#id-input')+1);
		const changedItem = createObj(changeItemProps, item);
		actEnd([changedItem], 'refresh');
	});
	$('#change-form').submit(function(){
		const changeItemProps = $(this).serializeArray();
		const item = newItems[getItemIndex('#id-input')];
		createObj(changeItemProps, item);
		actEnd(newItems, 'change', '#arrivals__carousel', 4);	
	});

	$('.find-btn_delete').on('click', function(){
		const item = newItems[getItemIndex('#id-input_delete')];
		if(!wrongIdCheck(item)){
			return;
		};
		$('.delete-btn').addClass('input-active')
		actEnd([item], 'refresh');
		$('#id-input_delete').prop('disabled', true);
		$('#find-new_delete').addClass('displayInBlock');
	});
	$('.delete-btn').on('click', function(){
		const index = getItemIndex('#id-input_delete');
		newItems.splice(index, 1)
		actEnd(newItems, 'delete', '#arrivals__carousel', 4);	
	});


	$('.login-btn, .reg-btn, .admin-btn').on('click', function(){
		$($(this)[0].id).toggleClass('active');
		event.stopPropagation();
	});
	$('.login-form, .prev').on('click', function(){
		event.stopPropagation();
	});
	$(document.body).on('click', function(){
		$(".active").removeClass('active');
		resetForm();
	});

	$('#create_btn, #change_btn, #delete_btn').on('click', function(){
		resetForm();
		$($(this).val()).addClass('form-active');
	});

	$('.onSale, .onStars').on('click', function(){
		if($(this).is(':checked')){
			$($(this)[0].id).prop('required', true);
			$($(this)[0].id).addClass('input-active');
		} else {
			$($(this)[0].id).prop('required', false);
			$($(this)[0].id).removeClass('input-active');
			$('input', $(this)[0].id).val('0');
		};
	});
	$('.find-new').on('click', function(){
		$('#id-input').prop('disabled', false);
		$('#id-input_delete').prop('disabled', false);
		$('.find-new').removeClass('displayInBlock');
	});
	$('#check').on('click', function(){
		$(".active").removeClass('active');
		resetForm();
	});
	function changeArrow (){
		$('.slick-next').html('<i class="fas fa-angle-right"></i>');
 		$('.slick-prev').html('<i class="fas fa-angle-left"></i>');
 	};
 	changeArrow();

 	let users = [
 	{
 		login: 'admin@mail.ru',
 		password: 'admin11',
 		username: 'Yana'
 	},
 	{
 		login: 'ad23min@mail.ru',
 		password: 'admin11',
 		username: 'Yana'
 	},
 	{
 		login: 'ad23min@mail.ru',
 		password: 'admin11',
 		username: 'Yana'
 	}
 	]

 	$('#login-form').submit(function(){
 		const changeItemProps = $(this).serializeArray();
 		const login = changeItemProps[0].value;
 		const password = changeItemProps[1].value;
		const item = users.find(function(a){return a.login === login});
		$('.login-error').removeClass('input-active');

		if(!item || password !== item.password){
			$('.login-error').addClass('input-active');
			return;
		};
		$('#login-form').addClass('displayNone');
		$('.username').html(item.username);
		$('.logined').addClass('input-active');
 	});

 	$('#reg-form').submit(function(){
 		const changeItemProps = $(this).serializeArray();
 		const item = createObj(changeItemProps);
			console.log(item);
 		users.push(item);
 			console.log(users)
		$('#reg-form').addClass('displayNone');
		$('.logined').addClass('input-active');
 	});
});

