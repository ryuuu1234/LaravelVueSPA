<template>
    <div>
        <div class="click-out" @click="modal = false"></div>

        <input type="text" class="form-control indx" placeholder="Search Item .."
            v-model="item"  @focus="modal = true" @input="filterItems"
            @keydown.up="up"
            @keydown.down="down"
            @keydown.enter="selectItem"
        />
        <div v-if="filteredItems && modal" class="pembungkus-dropdown indx" ref="optionsList">
            <ul class="drop-autocomplete">
                <li 
                    class="list-autocomplete" 
                    v-for="(filteredItem, index) in filteredItems" :key="index"
                    v-text="filteredItem[filterby]"
                    @click="setItem(index)" 
                    :class = "{'selected' : (selected == index)}"
                    >
                </li>
            </ul>
            <!-- awalnya  @click="setItem(filteredItem)-->
        </div>
    </div>
</template>
<script>
export default {
    // props:['items', 'filterby'],
    props:{
        items:{
            type: Array,
            default:[],
        },
        filterby: {
            type: String
        },
        // placeholder: {
        //     type:String,
        //     default: "Search Item"
        // }
    },
    data(){
        return{
            itemHeight: 29,
            item: '',
            modal: false,
            filteredItems: [],
            selectedItem: null,
            selected: 0,
            
        }
    },

    // computed: {
    //     filteredItems(){
    //         if (this.item == '') {
    //             return [];
    //         }
    //         return this.items.filter((val) => val[this.filterby].toLowerCase().startsWith(this.item.toLowerCase()));
    //     },
    // },

    methods: {
        filterItems: function(newInputValue){

            this.$emit('changeValue', newInputValue);
            this.modal = true;
            this.selected = 0;
             if (this.item == '') {
                this.filteredItems = [];
                this.modal = false;
            }
            // memfilter items pada inputan model item tanpa case sensitive
            this.filteredItems = this.items.filter(val => {
                return val[this.filterby].toLowerCase().startsWith(this.item.toLowerCase());
            });
        },

        setItem: function(index){
            this.selected = index;
            this.selectItem();
        },

        selectItem(){
            this.selectedItem = this.filteredItems[this.selected];
            this.item = this.selectedItem[this.filterby];
            this.modal = false;
            this.$emit('selected', JSON.parse(JSON.stringify(this.selectedItem)));
            this.$emit('change', JSON.parse(JSON.stringify(this.selectedItem)));
        },

        up(){
            if (this.selected == 0) {
                return;
            }
            this.selected -= 1;
            this.scrolToItem();
        },
        down(){
            if (this.selected >= this.filteredItems.length - 1) {
                return;
            }
            this.selected += 1;
            this.scrolToItem();
        },

        scrolToItem(){
            this.$refs.optionsList.scrollTop = this.selected * this.itemHeight;
        },
    },
    
    // watch: {
    //     item(){
    //         this.filterItems();
    //     }
    // }
}
</script>
<style  scoped>
    .pembungkus-dropdown {
        max-height: 120px;
        overflow-y: scroll;
        border-bottom: 1px solid lightgrey;
        border-radius: 3px;
    }
    ul.drop-autocomplete {
        border: 1px solid lightgrey;
        border-radius: 3px;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li.list-autocomplete {
        padding: 5px 12px;
    }

    li.list-autocomplete:hover, 
    li.list-autocomplete:focus {
        background: lightgrey;
        color: black;
        cursor:pointer;
    }

    li.list-autocomplete.selected {
        background: #343a40;
        color: white;
    }

    .click-out {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        /* background: red; */
    }
    .indx {
        z-index: 10;
        position: relative;
    }
</style>