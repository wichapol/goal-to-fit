const express = require('express');
const activities = require('../../DataToTast/dateActIcon.json')

const router = express.Router();


router.get('/', (req, res, next) => {

    const type = req.query.type

    if (type === "indoor") {
        let actIndoor = [];
        actIndoor = activities.filter(act => act.type === type.toString());
        return res.status(200).send(actIndoor)
    } else if (type === "outdoor") {
        let actOutdoor = [];
        actOutdoor = activities.filter(act => act.type === type.toString());
        return res.status(200).send(actOutdoor)
    }

    res.send(activities);

});

router.get('/:actID', (req, res, next) => {
    const actId = req.params.actID;
    const index = activities.findIndex((r) => r.id === actId);
    const foundAct = activities[index]

    if (!foundAct) {
        return res.status(404).send(`Not found Record ID ${actId}`)
    }
    return res.send(foundAct)


});
router.post('/', (req, res, next) => { });
router.put('/:actID', (req, res, next) => { });
router.delete('/:actID', (req, res, next) => { });


module.exports = router;