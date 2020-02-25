<template>
  <div>
    <b-form-group label="Selection mode:" label-cols-md="4">
      <b-form-select v-model="selectMode" :options="modes" class="mb-3"></b-form-select>
    </b-form-group>

    <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template v-slot:head(index)>
                <b-form-checkbox
                    name="checkbox-validation"
                    @change="selectAllRows" 
                    :checked="selectedItems.length === items.length">
                </b-form-checkbox>
            </template>
      <template v-slot:cell(index)="row">
        <b-form-checkbox name="selected-items" v-model="selectedItems" :value="row.item">
                </b-form-checkbox>
      </template>
    </b-table>
    <p>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="clearSelected">Clear selected</b-button>
      <b-button size="sm" @click="hapusYgTerpilih">hapus yg terpilih</b-button>
      <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button>
    </p>
    <p>
      Selected Rows:<br>
      {{ selectedItems }}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modes: ['multi', 'single', 'range'],
        fields: [
            {key:'index', label:'index'}, 
            {key:'isActive'}, 
            {key:'age'},
            {key:'first_name'}, 
            {key:'last_name'}
            ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        selectMode: 'multi',
        selectedItems:[]
      }
    },
    methods: {
      selectAllRows() {
          if (this.selectedItems.length === this.items.length) {
                this.selectedItems = [];
            } else  {
                this.selectedItems = this.items.slice();
            }
      },
      clearSelected() {
        
      },
      hapusYgTerpilih(item) {
        // Rows are indexed from 0, so the third row is index 2
        item = this.selectedItems.map(val=>val.age);
        this.selectedItems = item;
        console.log(item);
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        
      }
    }
  }
</script>