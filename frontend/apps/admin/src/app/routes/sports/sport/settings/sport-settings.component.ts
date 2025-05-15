import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SportsServce } from '../../../../shared/services/sportsService'; 
import { Sport } from '../../../../shared/types/sports/sport';
import { SportSetting } from '../../../../shared/types/sports/sport-setting';
import { SportsSettingsService } from '../../../../shared/services/sportsSettingsService';

@Component({
  selector: 'app-sport-settings',
  imports: [CommonModule],
  templateUrl: './sport-settings.component.html',
})
export class SportSettingsComponent implements OnInit {
  sport!: Sport;
  settings!: SportSetting[];

  constructor (private route: ActivatedRoute, private sportsService: SportsServce, private sportsSettingService: SportsSettingsService) {}

    ngOnInit(): void {
      const sportId = this.route.snapshot.paramMap.get('sportId');
      if (sportId) {
        this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });

      this.sportsSettingService.getSportSettings(sportId).subscribe(settings => {
        this.settings = settings;
      });
    }
  }

  updateSetting(event: Event, settingId: string) {
    const htmlElement = (<HTMLInputElement>event.target);

    this.sportsSettingService.updateSportSetting(htmlElement.value, settingId, this.sport.id).subscribe();

    htmlElement.classList.add('bg-green-200');
    setTimeout(() => {
      htmlElement.classList.remove('bg-green-200');
    }, 2000);
  }
}
