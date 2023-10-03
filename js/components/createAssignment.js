export default {
    template:`
    <form @submit.prevent="addNew">
    <div class="mb-3">
      <label for="new-assignment" class="form-label">Add New Assignment</label>
      <input type="text" v-model="newAssignment" class="form-control" id="new-assignment" placeholder="Enter Assignment" >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    `,
    data(){
        return{
            newAssignment: ''
        }
    },

 

    methods: {
        addNew(){
            if(this.newAssignment == ''){
                alert('Please Input Value First');
                return false;

            }
            this.$emit('addNew', this.newAssignment);
            this.newAssignment ='';
      
        }
    },
}