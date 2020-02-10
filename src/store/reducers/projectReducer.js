
const initState = {
    projects: [
        {id:'1',title:'Help me find peach', content: 'blah blah blah'},
        {id:'2',title:'Collect all the stars', content: 'blah blah blah blah'},
        {id:'3',title:'egg hunt with yoshi', content: 'blah blah blah blah blah'},
    ]
};

const projectReducer = (state = initState,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created Project',action.project)
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Error',action.e)
            return state;

        default:
            return state;

    }
}

export default projectReducer
