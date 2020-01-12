<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md offset-3">
                    <h1>Request ESA</h1>
                    <hr>
                    
                    <div class="form-group">
                        <label for="skillId">Team Member</label>
                        <select 
                        id="memberId"
                        class="form-control"
                        v-model="userData.teamMember">
                        <option v-for="member in allTeamMembers" 
                        v-bind:key="member"  v-bind:value="member.links[0].href">{{ member.firstName }} - {{ member.lastName }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="status"> Status</label>
                        <input 
                        type="text"
                        id="status"
                        class="form-control"
                        v-model="userData.esaStatus">
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
import Datepicker from 'vuejs-datepicker';
export default {
    name: "ebs",
    components: {
        Datepicker
    },
    data() {
        return {
            userData: {
                esaStatus: '',
                submittedDate: new Date(),
                startDate: new Date(),
                confirmDate: new Date(),
                comments: '',
                teamMember: '',
                racfId: 1,
                hasBadge: false,
                hasLaptop: false,
                orientation: false          
            },
            error: false
        }
    },
    computed: mapGetters(['allTeamMembers']),
    created() {
        this.fetchTeamMembers();
    },
    methods: {
         ...mapActions(['fetchTeamMembers']),
        submitted() {
            this.$store.dispatch("addEBS",
                this.userData)
            .then(() => {
                this.error = false;
                this.userData = {
                    esaStatus: '',
                    submittedDate: new Date(),
                    startDate: new Date(),
                    confirmDate: new Date(),
                    comments: '',
                    teamMember: '',
                    racfId: 1,
                    hasBadge: false,
                    hasLaptop: false,
                    orientation: false          
                };
            })
            .catch(error => {
                console.log(error);
                this.error = true;
            })
        }
    }
}
</script>