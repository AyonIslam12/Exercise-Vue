
import AssignmentList from "./AssignmentList.js";
export default {
    components:{AssignmentList},
    template: `

    <form @submit.prevent="addNew">
    <div class="mb-3">
      <label for="new-assignment" class="form-label">Add New Assignment</label>
      <input type="text" v-model="newAssignment" class="form-control" id="new-assignment" placeholder="Enter Assignment" >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

    <assignment-list :assignments="filters.progress" title="In Progress" exitData="All Completed" bgColor="success"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed" exitData="No Item Completed Yet" bgColor="warning"></assignment-list>
    
    `,
    data(){
         return{
             assignments: [
                 {name: 'Math Assignment', complete: false, id: 1},
                 {name: 'CSC Assignment', complete: false, id: 2},
                 {name: 'ICT Assignment', complete: false, id: 3},
                 {name: 'English Assignment', complete: false, id: 4},
             ],

             newAssignment: ''
         };
         
     },
     computed:{

         filters(){
           return{
            progress:this.assignments.filter(a => !a.complete),
            completed:this.assignments.filter(a=>a.complete),
           };
         }
     },
     methods: {
        addNew(){
            if(this.newAssignment == ''){
                alert('please Input Value First');
                return false;

            }
           this.assignments.push({
                name: this.newAssignment,
                complete:false,
                id:   this.assignments.length + 1,
           });
           this.newAssignment ='';
        }
     },
 }