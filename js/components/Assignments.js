
import AssignmentList from "./AssignmentList.js";
import createAssignment from "./createAssignment.js";
export default {
    components:{AssignmentList,createAssignment},
    template: `

    
    <div class="d-flex justify-content-between">
    <assignment-list :assignments="filters.progress" title="In Progress" bgColor="success">
        <create-assignment @addNew="createNewAssignment"></create-assignment>
    </assignment-list>
    <assignment-list 
            v-if="showCompleted"
            can-toggle 
            :assignments="filters.completed" 
            title="Completed" 
            bgColor="warning"
            @toggle="showCompleted = !showCompleted"
     ></assignment-list>
    </div>
    
    `,
    data(){
         return{
             assignments: [],
             showCompleted: true
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
     created() {
        fetch('http://localhost:3000/assignments')
        .then(response => response.json())
        .then(assignments =>{
            this.assignments = assignments;
        });
     },
     methods: {
        createNewAssignment(name,tag){
            tag = tag.charAt(0).toLowerCase() + tag.slice(1);
           this.assignments.push({
                name: name,
                tag: tag,
                complete:false,
                id:   this.assignments.length + 1,
           });
        }
     },
 }