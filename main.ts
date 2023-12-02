function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    200,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    200
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    停止()
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
        前进()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
        后退()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
        左转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
        右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Triangle) == 1) {
        makerobo.MotorRun(makerobo.Motors.Centre, 255)
    } else {
        停止()
        makerobo.MotorRun(makerobo.Motors.Centre, 0)
    }
})
