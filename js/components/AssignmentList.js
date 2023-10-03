import Assignment from "./Assignment.js"
export default {
    components:{Assignment},
    template: `
    <section>
     <div v-if="assignments.length ">
         <h1>{{ title }}</h1>
         <ul>
            <assignment  v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
         </ul>
     </div>
     <div v-else >
         <h1>{{ title }}</h1>
         <div class="alert alert-success text-center fw-bolder text-dark" role="alert">
             {{ exitData }}
         </div>
     </div>
     </section>
    `,
    props:{
        assignments: Array,
        title: String,
        exitData: String
    }
}