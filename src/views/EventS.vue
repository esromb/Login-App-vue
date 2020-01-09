<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ event.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Date:</strong> {{ event.date }}
            <br>
            <strong>Time:</strong> {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5"><strong>Location:</strong> {{ event.location }}</p>
        <p class="is-size-5"><strong>Category:</strong> {{ event.category }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="event.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'EventSingle',
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'Create Skill',
          category: 'Job Posting',
          description: 'Create a new skill per requirement of the project',
          
        },
         {
          id: 2,
          name: 'Create Role',
          category: 'Roles',
          description: 'Add a new role per requirement to the project',
        },
        {
          id: 3,
          name: 'Add Team members',
          category: 'Candidates',
          description: 'Add a selected team member',
        },
         {
          id: 4,
          name: 'View Team members',
          category: 'Candidates',
          description: 'To get the list of team members',
        },
        {
          id: 5,
          name: 'Update Team members',
          category: 'Candidates',
          description: 'Update team member details',
        }



      ],
      event: {}
    }  
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
}
</script>