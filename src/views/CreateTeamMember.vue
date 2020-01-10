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
                        <input 
                        type="text"
                        id="skillId"
                        class="form-control"
                        v-model="userData.skillId">
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
                        <input 
                        type="text"
                        id="roleId"
                        class="form-control"
                        v-model="userData.roleId">
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input 
                        type="text"
                        id="location"
                        class="form-control"
                        v-model="userData.location">
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
                        <input 
                        type="text"
                        id="trainingStage"
                        class="form-control"
                        v-model="userData.trainingStage">
                        <option v-for="trainingStage in trainingStages"
                        v-bind:key="trainingStage">{{ trainingStage }}</option>
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
                    @click="submitted">Submit</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                firstName: '',
                lastName: '',
                skillId: 0,
                level: '',
                roleId: 0,
                location: '',
                gradeLevel: '',
                memberStatus: '',
                trainingStage: '',
                domain: '',
                comments: '',
                employeeId: 0,
                racfId: 0
            },
            levels: ['1','2','3','4'],
            gradeLevels: ['1','2','3','4'],
            trainingStages: ['1','2','3','4'],
            isSubmitted: false
        }
    },
    methods: {
        submitted() {
            this.isSubmitted = true;
        }
    }
}
</script>