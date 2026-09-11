interface NeighbourhoodProps{
    image: string;
    title: string;
    id: string;
}

const categories: NeighbourhoodProps[] = [
    {
        id: "111",
        image:"https://images.unsplash.com/photo-1499310392581-322cec0355a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVpZ2hib3VyaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Rent",
    },
    {
        id: "112",
        image:"https://images.unsplash.com/photo-1604605823030-27a58eb74a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVpZ2hib3VyaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Lease",
    },
    {
        id: "113",
        image:"https://images.unsplash.com/photo-1579678929710-862f8e01c0b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmVpZ2hib3VyaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Land",
    },
    {
        id: "114",
        image:"https://images.unsplash.com/photo-1476385822777-70eabacbd41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVpZ2hib3VyaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Shops",
    }
];

export default categories