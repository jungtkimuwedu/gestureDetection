// MaterialDuplicator.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Duplicates material of the object it is attached to.

// -----JS CODE-----
// @input SceneObject headBindingObject
// @input int numNodSamples = 10
// @input float nodThreshold = 0.15

var nodSamples = [];

function update (eventData)
{
    var headTransform = script.headBindingObject.getTransform();
    var headForward = headTransform.forward;
    var headForwardNoX = new vec3( headTransform.forward.y, 0.0, headTransform.forward.z )
    var dot = headForwardNoX.dot( headForward );

    if( nodSamples.length >= script.numNodSamples )
    {
        nodSamples.shift();
    }
    nodSamples.push( dot );

    checkForShake();
}
var event = script.createEvent("UpdateEvent");
event.bind( update );

function checkForShake()
{
    var latestNodIndex = nodSamples.length - 1;
    var latestNod = nodSamples[latestNodIndex];
     
    for( var i = latestNodIndex - 1; i > 0; i-- )
    {
        var diff = latestNod - nodSamples[i];
       
        if( diff < -script.nodThreshold )
        {
            nodded();
            nodSamples = [];
            break;
        }
    }
}

function nodded()
{
    global.behaviorSystem.sendCustomTrigger("trigger_head_shake");
}