// hw3
// Wayne Conover

var time = 0.0;

function init()
{
    var canvas = document.getElementById("webgl-canvas");
    gl = canvas.getContext("webgl2");

    gl.clearColor(1.0, 0.0, 1.0, 1.0);

    cube = new Cube(gl);

    p =  perspective();
    cube.P = mat4();
    cube.MV = mat4();

    render();
}

function render()
{

    

    gl.clear(gl.COLOR_BUFFER_BIT);

    time += 1.0;

    cube.MV = rotateZ(time);

    cube.render();

    requestAnimationFrame(render);
    
}

window.onload = init;