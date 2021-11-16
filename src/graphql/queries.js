const getParent = `query($id:String!) {
    getParent(id:$id) {
        birthdate
        childsId
        createdAt
        email
        id
        name
        surname
    }
}`;

const getChild =  `query($id:String!) {
    getChild(id:$id) {
        birthdate
        createdAt
        email
        height
        history {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        id
        name
        parentId
        status {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        surname
        weight
        asthmaClassification
    }
}`;

const listChilds =  `query($parentId:String!) {
    listChilds(parentId:$parentId) {
        birthdate
        createdAt
        email
        height
        history {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        id
        name
        parentId
        status {
            asthmaAttack
            chiado
            createdAt
            fluxoAr
            tosse
        }
        surname
        weight
        asthmaClassification
    }
}`;

export { getParent, getChild, listChilds };
