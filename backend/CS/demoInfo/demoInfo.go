package main

import (
	"fmt"
	"log"
	"os"

	dem "github.com/markus-wa/demoinfocs-golang/v4/pkg/demoinfocs"
	events "github.com/markus-wa/demoinfocs-golang/v4/pkg/demoinfocs/events"
)

func main() {
	f, err := os.Open("../demoPath/4617910143007849243_10000447.dem")
	if err != nil {
		log.Panic("打开demo文件失败: ", err)
	}
	defer f.Close()

	p := dem.NewParser(f)
	defer p.Close()

	// 注册Kill事件处理函数
	p.RegisterEventHandler(func(e events.Kill) {
		fmt.Printf("Killer: %s, Weapon: %s, Victim: %s, Headshot: %v, Wallbang: %v\n",
			e.Killer.Name, e.Weapon, e.Victim.Name, e.IsHeadshot, e.PenetratedObjects > 0)
	})

	// 开始解析演示文件
	err = p.ParseToEnd()
	if err != nil {
		log.Panic("无法解析demo文件 ", err)
	}
}
