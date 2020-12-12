export class QuestModel {
    id: number;
    title: string;
    mac_addr: string;
    quest_index: number;
    created_on: string;
    updated_on: string;
    signal_straight : number;
    mode: number;
    
}

export class QuestHealthCheck {
    signal_straight : number;
    mode: number;
}

export interface modeInMsg{
    mode: number;
}