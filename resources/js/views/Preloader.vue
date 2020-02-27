<template>
	<transition name="fade">
		<div v-if="show" class="preloader">
			<div >
                <img class="logo" :src="`${$store.state.serverPath}/storage/galleries_images/074c1be8-5313-4071-bddc-da6e25a0ad94.jpg`" alt="">
            </div>
			<p>Hallo Capcin!</p>
			<div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'preloader',
	data(){
		return {
			show: true
		}
	},
	// mounted(){
	// 	if(Boolean(this.show)) this.showToggle()
	// },
	// methods: {
	// 	showToggle(){
	// 		setTimeout(() => {
	// 			this.show = false
	// 		}, 700)
	// 	}
	// }
}
</script>

<style lang="css" scoped>
.preloader {
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center;
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 background-color: white;
	 z-index: 9999;
}
.preloader img.logo {
	 width: 10.5rem;
	 height: 10.5rem;
	 background: white;
	 background-repeat: no-repeat;
}
 
 .preloader p {
	 font: 600 1.5rem;
	 margin-top: 1rem;
}
 .preloader .circles {
	 display: flex;
	 margin-top: 1rem;
}
 .preloader .circles .circle {
	 width: 1.5rem;
	 height: 1.5rem;
	 margin: 0.75rem;
	 background-color: #dc3545;
	 border-radius: 50%;
	 /* animation-name: scaleIn;
	 animation-duration: 0.7s;
	 transform: scale(0); */
}
 .preloader .circles:nth-child(1) {
	 animation-delay: 0s;
}
 .preloader .circles:nth-child(2) {
	 animation-delay: 0.05s;
}
 .preloader .circles:nth-child(3) {
	 animation-delay: 0.1s;
}
 .preloader .circles:nth-child(4) {
	 animation-delay: 0.15s;
}
 .preloader .circles:nth-child(5) {
	 animation-delay: 0.2s;
} 
 
</style>