export default {
    data: function () {
        return {

            // TODO: this is list of languages for notification, edit if necessary
            languages: ['English', 'Русский', 'Česky', 'हिन्दी', 'עברית'],

            profile: {
                name: '',
                firstName: '',
                phone: '',
                email: '',
                language: 'Română',
                isAgreeEmail: true,
                isAgreeSMS: true
            },
            password: {
                old: '',
                new: '',
                confirm: ''
            }
        }
    },
    methods: {
        photoUpload() {
            // TODO: handle the process of profile photo uploading
        },

        saveProfile() {
            // TODO: handle profile data (this.profile)
        },

        savePassword() {
            // TODO: handle password data (this.password)
        }

    }
}
