import { 
    addNewPlayer, 
    getPlayers, 
    getPlayerWithId,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)
        
        // POST endpoint
        .post(addNewPlayer)
    
        app.route('/player/:PlayerId')
        // Get specific player
        .get(getPlayerWithId)
        
        // Update a specific player
        .put(UpdatePlayer)
        
        // Delete a specific player
        .delete(deletePlayer)

}

export default routes;