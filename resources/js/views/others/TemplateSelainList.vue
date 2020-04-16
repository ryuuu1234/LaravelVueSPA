<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-dark">{{ $route.meta.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ $route.meta.subtitle }}</h6>
                <hr class="batas-dark"/>
                <div class="px-4">
                    
                </div>
                <hr class="batas-dark"/>
                <div class="text-right">
                    <button type="submit" class="btn btn-danger btn-xsm"
                        @click.prevent="submit"
                    >Update Status</button>
                    <button type="submit" class="btn btn-dark btn-xsm"
                        @click="$router.go(-1)"
                    >Kembali</button>
                </div>
            </div>
        </div>
       
       
    </div>
</template>