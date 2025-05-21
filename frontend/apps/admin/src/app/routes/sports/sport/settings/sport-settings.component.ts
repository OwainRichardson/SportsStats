import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sport } from '@common/types/sports/sport';
import { SportSetting } from '@common/types/sports/sport-setting';
import { SportsSettingsService } from '@common/services/sportsSettingsService';
import { MetricsService } from '@common/services/metricsService';
import { SportMetric } from '@common/types/sports/sport-metric';
import { SportsService } from '@common/services/sportsService';

@Component({
  selector: 'app-sport-settings',
  imports: [CommonModule, RouterLink],
  templateUrl: './sport-settings.component.html',
})
export class SportSettingsComponent implements OnInit {
  sport: Sport = {id: '', name: '', icon: ''};
  settings!: SportSetting[];
  metrics!: SportMetric[];

  constructor (private route: ActivatedRoute, 
                private sportsService: SportsService, 
                private sportsSettingService: SportsSettingsService,
                private metricService: MetricsService) {}

    ngOnInit(): void {
      const sportId = this.route.snapshot.paramMap.get('sportId');
      if (sportId) {
        this.sportsService.getSport(sportId).subscribe(sport => {
        this.sport = sport;
      });

      this.sportsSettingService.getSportSettings(sportId).subscribe(settings => {
        this.settings = settings;
      });

      this.getMetrics(sportId);
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

  toggleMetricEdit(metricId: string) {
    const metricEdit = document.getElementById(`metric-edit-${metricId}`);
    metricEdit?.classList.toggle('hidden');
  }

  updateMetric(metric: SportMetric) {
    const metricNameInput = document.getElementById(`metric-name-${metric.id}`) as HTMLInputElement;    
    metric.name = metricNameInput.value;

    const isTurnoverInput = document.getElementById(`is-turnover-${metric.id}`) as HTMLInputElement;
    metric.isTurnover = isTurnoverInput.checked;

    const isScoreModifierInput = document.getElementById(`is-score-modifier-${metric.id}`) as HTMLInputElement;
    metric.isScoreModifier = isScoreModifierInput.checked;

    const scoreModifierInput = document.getElementById(`score-modifier-${metric.id}`) as HTMLInputElement;
    metric.scoreModifier = parseInt(scoreModifierInput.value)

    this.metricService.updateMetric(metric, this.sport.id).subscribe(() => {
      const metricElement = document.getElementById(`metric-${metric.id}`) as HTMLInputElement;
      
      metricElement.classList.add('bg-green-200');
      setTimeout(() => {
        metricElement.classList.remove('bg-green-200');
      }, 1000);
    });
  }

  createMetric() {
    const metricNameInput = document.getElementById('new-metric-name') as HTMLInputElement;    
    const isTurnoverInput = document.getElementById('new-is-turnover') as HTMLInputElement;
    const isScoreModifierInput = document.getElementById('new-is-score-modifier') as HTMLInputElement;
    const scoreModifierInput = document.getElementById('new-score-modifier') as HTMLInputElement;

    const metric: SportMetric = {
      id: 'new',
      name: metricNameInput.value,
      isTurnover: isTurnoverInput.checked,
      isScoreModifier: isScoreModifierInput.checked,
      scoreModifier: parseInt(scoreModifierInput.value)
    }
    this.metricService.createMetric(metric, this.sport.id).subscribe(() => {
      const metricElement = document.getElementById(`new-metric`) as HTMLInputElement;
      
      metricElement.classList.add('bg-green-200');
      setTimeout(() => {
        metricElement.classList.remove('bg-green-200');
        
        this.getMetrics(this.sport.id);

        metricElement.classList.add('hidden');
      }, 1000);
    });
  }

  showNewMetric() {
    const metricElement = document.getElementById(`new-metric`) as HTMLInputElement;
    metricElement.classList.remove('hidden');
  }

  deleteMetric(metricId: string) {
    this.metricService.deleteMetric(metricId, this.sport.id).subscribe(() => {
      this.getMetrics(this.sport.id);
    });
  }

  private getMetrics(sportId: string) {
    this.metricService.getSportMetrics(sportId).subscribe(metrics => {
      this.metrics = metrics;
    });
  }
}
