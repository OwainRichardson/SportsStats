import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsSettingsService } from '@common/services/sportsSettingsService';
import { TournamentSettingsService } from '@common/services/tournamentSettingsService';
import { TournamentService } from '@common/services/tournamentService';
import { SportsService } from '@common/services/sportsService';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SportSetting } from '@common/types/sports/sport-setting';
import { Tournament } from '@common/types/tournaments/tournament';

@Component({
  selector: 'app-sport-tournament-settings',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-tournament-settings.component.html',
})
export class SportTournamentSettingsComponent implements OnInit {
  sportSettings!: SportSetting[];
  tournamentSettings!: SportSetting[];
  tournament!: Tournament;
  sportId!: string;

  constructor(private route: ActivatedRoute,
                private sportsService: SportsService,
                private tournamentService: TournamentService,
                private sportSettingsService: SportsSettingsService,
                private tournamentSettingsService: TournamentSettingsService) {}

  ngOnInit(): void {
    const sportId = this.route.snapshot.paramMap.get('sportId');
    const tournamentId = this.route.snapshot.paramMap.get('tournamentId');
    if (sportId) {
      this.sportId = sportId;

      if (tournamentId) {
        this.tournamentService.getTournament(sportId, tournamentId).subscribe(tournament => {
          this.tournament = tournament;
        });

        this.sportSettingsService.getSportSettings(sportId).subscribe(sportSettings => {
          this.sportSettings = sportSettings;
        });

        this.getTournamentSettings(sportId, tournamentId);
      }
    }
  }

  getTournamentSettingsValue(sportSettingId: string): string {
    return this.tournamentSettings?.find(setting => setting.sportSettingId === sportSettingId)?.value || '';
  }

  updateSetting(event: Event, settingId: string) {
    if (settingId) {
      const tournamentValueInput = event.target as HTMLInputElement;
      if (tournamentValueInput && tournamentValueInput.value !== '') {
        if (this.tournamentSettings.find(setting => setting.sportSettingId === settingId)) {
          this.tournamentSettingsService.updateTournamentSetting(tournamentValueInput.value, settingId, this.sportId, this.tournament.id).subscribe(); 
        } else {
          this.tournamentSettingsService.createTournamentSetting(tournamentValueInput.value, settingId, this.sportId, this.tournament.id).subscribe();
        }
      } else if (tournamentValueInput && tournamentValueInput.value === '') {
          if (this.tournamentSettings.find(setting => setting.sportSettingId === settingId)) {
            this.tournamentSettingsService.deleteTournamentSetting(settingId, this.sportId, this.tournament.id).subscribe();
          }
      }

      this.getTournamentSettings(this.sportId, this.tournament.id);

      tournamentValueInput.classList.add('bg-green-200');
      setTimeout(() => {
        tournamentValueInput.classList.remove('bg-green-200');
      }, 2000);
    }
  }

  getTournamentSettings(sportId: string, tournamentId: string) {
    this.tournamentSettingsService.getTournamentSettings(sportId, tournamentId).subscribe(tournamentSettings => {
      this.tournamentSettings = tournamentSettings;
    });
  }
}
