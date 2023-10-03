
import AssignmentList from "./AssignmentList.js";
export default {
    components:{AssignmentList},
    template: `
    <assignment-list :assignments="filters.progress" title="In Progress" exitData="Completed"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed" exitData="No Completed Item"></assignment-list>
    `,
    data(){
         return{
             assignments: [
                 {name: 'Math Assignment', complete: true, id: 1},
                 {name: 'CSC Assignment', complete: false, id: 2},
                 {name: 'ICT Assignment', complete: false, id: 3},
                 {name: 'English Assignment', complete: false, id: 4},
             ]
         }
     },
     computed:{

         filters(){
           return{
            progress:this.assignments.filter(a => !a.complete),
            completed:this.assignments.filter(a=>a.complete),
           };
         }
     }
 }