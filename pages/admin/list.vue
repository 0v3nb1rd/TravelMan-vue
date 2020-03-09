<template>
  <v-data-table :headers="headers" :items="posts" class="elevation-1" hide-default-footer>
    <!-- <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>-->
    <template v-slot:item.comments="{ item }">
      <v-chip :color="getColor(item.comments)" dark>
        <v-icon left small>mdi-comment</v-icon>
        {{ item.comments.length }}
      </v-chip>
    </template>

    <template v-slot:item.views="{ item }">
      <v-chip :color="getColor(item.views)" dark>
        <v-icon left small>mdi-eye</v-icon>
        {{ item.views }}
      </v-chip>
    </template>

    <template v-slot:item.date="{ item }">
      <v-chip>
        <v-icon left small>mdi-clock</v-icon>
        {{ item.date | date() }}
      </v-chip>
    </template>

    <template v-slot:item.action="{ item }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon color="blue" v-on="on" class="mr-2" @click="editItem(item._id)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <span>Edit</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon color="red" dark v-on="on" @click="deleteItem(item._id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
        <span>Delate</span>
      </v-tooltip>
    </template>
    <!-- <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>-->
  </v-data-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data: () => ({
    dialog: false,
    headers: [
      // { text: 'ID', value: '_id' },
      { text: 'Title', value: 'title' },
      { text: 'Date', value: 'date' },
      { text: 'Views', value: 'views' },
      { text: 'Comments', value: 'comments' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      _id: 0,
      title: '',
      comments: '',
      views: 0,
      date: 0
    },
    defaultItem: {
      _id: 0,
      title: '',
      comments: '',
      views: 0,
      date: 0
    }
  }),

  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  // created() {
  //   this.initialize()
  // },

  methods: {
    getColor(calories) {
      if (calories > 500) return 'green'
      else if (calories > 200) return 'orange'
      else return 'red'
    },

    editItem(id) {
      // console.log('edit', id)
      this.$router.push(`/admin/post/${id}`)
      // this.editedIndex = this.desserts.indexOf(item)
      // this.editedItem = Object.assign({}, item)
      // this.dialog = true
    },

    async deleteItem(id) {
      // console.log('edit', item)
      // const index = this.desserts.indexOf(id)
      try {
        if (confirm('Are you sure you want to delete this item?')) {
          await this.$store.dispatch('post/remove', id)
          this.posts = this.posts.filter(p => p._id !== id)
          // console.log(this.posts)
        }
        // this.desserts.splice(index, 1)
      } catch (e) {
        console.log(e)
      }
    }

    // close() {
    //   this.dialog = false
    //   setTimeout(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   }, 300)
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem)
    //   } else {
    //     this.desserts.push(this.editedItem)
    //   }
    //   this.close()
    // }
  }
}
</script>

<style>
</style>