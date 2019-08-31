local ESX = nil
local isTalking = false

CreateThread(function()
	while ESX == nil do
		TriggerEvent("esx:getSharedObject", function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
	ESX.UI.HUD.SetDisplay(0.0)
end)

--Show GUI
RegisterNetEvent("mine_custumui:show")
AddEventHandler("mine_custumui:show", function()
	SendNUIMessage({action = "show"})
end)


--Starter state
RegisterNetEvent("esx:playerLoaded")
AddEventHandler("esx:playerLoaded", function(xPlayer)
	--Money
	SendNUIMessage({action = "setValue", key = "money", value = xPlayer.money .. " €"})
	
	--Job
	local job = xPlayer.job
	SendNUIMessage({action = "setValue", key = "job", value = job.label .. " - " .. job.grade_label, icon = job.name})
end)

--Voice
CreateThread(function()
	while true do
		Wait(0)
		if isTalking == false then
			if NetworkIsPlayerTalking(PlayerId()) then
				isTalking = true
				SendNUIMessage({action = "setTalking", value = true})
			end
			else if NetworkIsPlayerTalking(PlayerId()) == false then
				isTalking = false
				SendNUIMessage({action = "setTalking", value = false})
			end
		end
	end
end)

--Update state
RegisterNetEvent("es:activateMoney")
AddEventHandler("es:activateMoney", function(e)
	SendNUIMessage({action = "setValue", key = "cash", value = ESX.Math.GroupDigits(e) .. " €"})
end)

RegisterNetEvent("esx:setJob")
AddEventHandler("esx:setJob", function(job)
	SendNUIMessage({action = "setValue", key = "job", value = job.label .. " - " .. job.grade_label, icon = job.name})
end)

RegisterNetEvent("mine_customui:updateStatus")
AddEventHandler("mine_customui:updateStatus", function(status)
	SendNUIMessage({action = "updateStatus", status = status})
end)