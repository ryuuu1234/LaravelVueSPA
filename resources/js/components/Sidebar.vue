<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Core</div>
                    <router-link :to="{name:'dashboard'}" class="nav-link" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        Dashboard
                    </router-link>

                    <a class="nav-link collapsed"  href="#" data-toggle="collapse" data-target="#collapseLayouts"
                        aria-expanded="false"
                        aria-controls="collapseLayouts" >
                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                        Layouts
                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                    </a>
                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">

                            <router-link :to="{name:'categories'}" class="nav-link" exact>Categories</router-link>
                            
                        </nav>
                    </div>
                    
                        
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                {{$store.state.profile.role}} Capcin
            </div>
        </nav>
    </div>
</template>
