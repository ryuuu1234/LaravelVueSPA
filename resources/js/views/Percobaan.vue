<template>
    <div>
        <button class="button field is-danger" @click="checkedRows = []"
            :disabled="!checkedRows.length">
            <b-icon icon="close"></b-icon>
            <span>Clear checked</span>
        </button>

        
            
                <b-table striped hover small
                    :data="copyOfExpenses"
                    :columns="columns"
                    :checked-rows.sync="checkedRows"
                    :is-row-checkable="(row) => row.id !== 3"
                    checkable>

                   
                </b-table>
                           
            
        
    </div>
</template>

<script>
export default {
   data() {
    const expenses = [
        { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male', 'value': 100 },
        { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' , 'value': 100},
        { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female', 'value': 100 },
        { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male', 'value': 100 },
        { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' , 'value': 100}
    ]
    return {
        expenses,
        copyOfExpenses: [] ,
        checkedRows: [],
        columns: [
            {
                field: 'id',
                label: 'ID',
                width: '40',
                numeric: true
            },
            {
                field: 'first_name',
                label: 'First Name',
            },
            {
                field: 'last_name',
                label: 'Last Name',
            },
            {
                field: 'date',
                label: 'Date',
                centered: true
            },
            {
                field: 'gender',
                label: 'Gender',
            },
                {
                field: 'value',
                label: 'Value',
            }
        ]
    }
},
methods: {
    toggleValue () {
      for (let i = 0; i < this.copyOfExpenses.length; i++) {
        let found = false
        for (let j = 0 ; j < this.checkedRows.length; j++) {
          if (this.copyOfExpenses[i].id === this.checkedRows[j].id) {
            this.copyOfExpenses[i].value = 0
            found = true
            break
          }
        }
        if (!found) {
           this.copyOfExpenses[i].value = this.expenses[i].value
        }
      }
    }
  },
    // mounted () {
    //   this.copyOfExpenses = _.cloneDeep(this.expenses) 
    // },
  watch: {
    checkedRows () {
      this.toggleValue()
    }
  }
}  
</script>