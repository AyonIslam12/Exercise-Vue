import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js"
export default {
    components:{Assignment,AssignmentTags,Panel},
    template: `
    <section class="card bg-dark m-3 rounded">
        <div class="d-flex justify-content-end p-1">
            <button v-show="canToggle" @click="$emit('toggle')" type="button" class="btn-close bg-light"></button>
        </div>
     <panel v-if="assignments.length" class="m-4 border p-4" theme="dark">
        <div class="d-flex justify-content-between">
            <h4 class="mr-5">{{ title }} <span>({{ assignments.length }})</span></h4>
            
        </div>
         <assignment-tags
            v-model:currentTag="currentTag"
            :initial-tags="assignments.map(a => a.tag)"
            />
         <ul>
            <assignment  v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment>
         </ul>
         <slot></slot>
         <template v-slot:footer>
         This Is Footer Content
       </template>
    </section>
        
     </panel>
   
    `,
    props:{
        assignments: Array,
        title: String,
        bgColor: String,
        canToggle: { type: Boolean, default: false}
    },
    data(){
        return{
            currentTag: 'all'
        }

    }, 
    computed:{
        filteredAssignments(){
            if(  this.currentTag == 'all'){
                return  this.assignments;
            }
            return this.assignments.filter(a=>a.tag === this.currentTag)
        }
       
    },
   
}