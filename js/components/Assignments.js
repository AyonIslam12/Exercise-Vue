
import AssignmentList from "./AssignmentList.js";
import createAssignment from "./createAssignment.js";
export default {
    components:{AssignmentList,createAssignment},
    template: `

    <create-assignment @addNew="createNewAssignment"></create-assignment>
    <assignment-list :assignments="filters.progress" title="In Progress" exitData="All Completed" bgColor="success"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed" exitData="No Item Completed Yet" bgColor="warning"></assignment-list>
    
    `,
    data(){
         return{
             assignments: [
                 {name: 'Math Assignment', complete: false, id: 1, tag:'math'},
                 {name: 'CSC Assignment', complete: false, id: 2, tag:'csc'},
                 {name: 'ICT Assignment', complete: false, id: 3, tag:'ict'},
                 {name: 'English Assignment', complete: false, id: 4, tag:'english'},
             ],

           
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