export default {
    template:`
    <form @submit.prevent="addNew">
    <div class="mb-3">
        <label for="tag" class="form-label">Assignment Type</label>
        <input type="text" v-model="tag" class="form-control" id="tag" placeholder="Enter Tag Name" >

        <label for="new-assignment" class="form-label">Assignment Name</label>
        <input type="text" v-model="newAssignment" class="form-control" id="new-assignment" placeholder="Enter Assignment Name" >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
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