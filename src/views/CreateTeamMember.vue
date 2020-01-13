<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <h1>Add a New Team Member</h1>
                    <hr>
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input 
                        type="text"
                        id="firstName"
                        class="form-control"
                        v-model="userData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input 
                        type="text"
                        id="lastName"
                        class="form-control"
                        v-model="userData.lastName">
                    </div>
                    <div class="form-group">
                        <label for="skillId">Skill Id</label>
                        <select 
                        id="skillId"
                        class="form-control"
                        v-model="userData.skill">
                        <option v-for="skill in allSkills" 
                        v-bind:key="skill"  v-bind:value="skill.links[0].href">{{ skill.name }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="level">Level</label>
                        <select 
                            id="level"
                            class="form-control"
                            v-model="userData.level">
                            <option 
                            v-for="level in levels" v-bind:key="level">{{ level }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="RoleId">Role Id</label>
                        <select 
                        id="RoleId"
                        class="form-control"
                        v-model="userData.role">
                        <option v-for="role in allRoles" 
                        v-bind:key="role.id"  v-bind:value="role.links[0].href">{{ role.id }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <select 
                        id="location"
                        class="form-control"
                        v-model="userData.location">
                        <option v-for="location in locations"
                        v-bind:key="location">{{ location }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="gradeLeve">Grade Level</label>
                        <select 
                        id="gradeLevel"
                        class="form-control"
                        v-model="userData.gradeLevel">
                        <option v-for="gradeLevel in gradeLevels" 
                        v-bind:key="gradeLevel">{{ gradeLevel }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="memberStatus">Member Status</label>
                        <input 
                        type="text"
                        id="memberStatus"
                        class="form-control"
                        v-model="userData.memberStatus">
                    </div>
                    <div class="form-group">
                        <label for="trainingStage">Training Stage</label>
                        <select 
                        type="text"
                        id="trainingStage"
                        class="form-control"
                        v-model="userData.trainingStage">
                        <option v-for="trainingStage in trainingStages"
                        v-bind:key="trainingStage">{{ trainingStage }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="domain">Domain</label>
                        <input 
                        type="text"
                        id="domain"
                        class="form-control"
                        v-model="userData.domain">
                    </div>
                    <div class="form-group">
                        <label for="comments">Comments</label>
                        <textarea
                        id="comments"
                        rows=5
                        class="form-control"
                        v-model="userData.comments"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="employeeId">EmployeeId</label>
                        <input 
                        type="text"
                        id="employeeId"
                        class="form-control"
                        v-model="userData.employeeId">
                    </div>
                    <div class="form-group">
                        <label for="racfId">Racf Id</label>
                        <input 
                        type="text"
                        id="racfId"
                        class="form-control"
                        v-model="userData.racfId">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <button class="btn btn-primary" 
                    @click.prevent="submitted">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {mapGetters, mapActions}  from 'vuex';
export default {
    data() {
        return {
            userData: {
                firsName: '',
                lastName: '',
                skillId: null,
                level: '',
                role: null,
                gradeLevel: '',
                memberStatus: '',
                trainingStage: '',
                location: '',
                domain: '',
                comments: '',
                employeeId: null,
                racfId: null
            },
            levels: ['1','2','3','4'],
            gradeLevels: ['1','2','3','4'],
            trainingStages: ['1','2','3','4'],
            locations: ['ATL', 'NYC', 'India'],
            isSubmitted: false
        }
    },
    computed: mapGetters(['allSkills', 'allRoles']),
    created() {
        this.fetchSkills();
        this.fetchRoles();
    },
    methods: {
        ...mapActions(['fetchSkills', 'fetchRoles']),
        submitted() {
             this.$store.dispatch("addTeamMember", 
                this.userData)
            .then(() => {
                this.error = false;
                this.userData = {
                    firstName: '',
                    lastName: '',
                    skillId: null,
                    level: '',
                    roleId: null,
                    location: '',
                    gradeLevel: '',
                    memberStatus: '',
                    trainingStage: '',
                    domain: '',
                    comments: '',
                    employeeId: null,
                    racfId: null
                };
            })
            .catch(error => {
                console.log(error);
                this.error = true;
            })
            this.isSubmitted = true;
        }
    }
}
</script>