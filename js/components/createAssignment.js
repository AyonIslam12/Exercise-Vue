export default {
    template:`
    <form @submit.prevent="addNew" class="border p-3 bg-dark rounded">
    <h4 class="text-start"> Create Assignment</h4>
    <div class="mb-3 row">
       <div class="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
            <label for="tag" class="form-label">Assignment Type</label>
            <input type="text" v-model="tag" class="form-control" id="tag" placeholder="Enter Tag Name">
       </div>
       <div class="col-sm-12 col-md-6 col-xl-6 col-xxl-6">
            <label for="new-assignment" class="form-label">Assignment Name</label>
            <input type="text" v-model="newAssignment" class="form-control" id="new-assignment" placeholder="Enter Assignment Name">
       </div>
    </div>
    <button type="submit" class="btn btn-primary w-100">Submit</button>
  </form>
    `,
    data(){
        return{
            newAssignment: '',
            tag: ''
        }
    },

 

    methods: {
        addNew(){
            if(this.newAssignment == '' || this.tag ==''){
                alert('Please Input The Value First');
                return false;

            }
            this.$emit('addNew', this.newAssignment,this.tag);
            this.newAssignment ='';
            this.tag ='';
      
        }
    },
}