﻿namespace SportsStats.Data.Entities
{
    public class MetricValue
    {
        public Guid Id { get; set; }
        public Guid MetricId { get; set; }
        public string Value { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
    }
}
